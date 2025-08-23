/**
 * Client-side API helper for calling same-origin serverless functions under /api.
 * - Adds a configurable timeout (default 15s)
 * - Auto-parses JSON responses
 * - Maps common error statuses (422 schema violations, 503 missing server key)
 * - Never includes server-only secrets like OPENAI_API_KEY
 */

export class ApiError extends Error {
  constructor(status, code, message, details) {
    super(message || code || 'API error');
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

function isJsonResponse(response) {
  const contentType = response.headers.get('content-type') || '';
  return contentType.includes('application/json');
}

export async function apiFetch(path, options = {}) {
  const {
    method = 'GET',
    headers = {},
    body,
    timeoutMs = 15000,
    // If you need to override the base, pass an absolute URL in `path`
  } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  // Ensure we do not accidentally send server-only secrets from the client.
  // OPENAI_API_KEY must never be present on the client.
  if (headers && typeof headers === 'object') {
    if ('authorization' in headers && String(headers.authorization).toLowerCase().includes('bearer')) {
      // Intentionally allow user-defined tokens, but never inject server env secrets here.
    }
  }

  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;
  const finalHeaders = {
    Accept: 'application/json',
    ...headers,
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
  };

  const requestInit = {
    method,
    headers: finalHeaders,
    signal: controller.signal,
    body: isFormData ? body : body != null ? JSON.stringify(body) : undefined,
  };

  // Support same-origin relative paths (e.g., '/api/report') or absolute URLs
  const url = path.startsWith('http') ? path : path;

  try {
    const response = await fetch(url, requestInit);
    clearTimeout(timeoutId);

    if (!response.ok) {
      let payload;
      try {
        payload = isJsonResponse(response) ? await response.json() : await response.text();
      } catch (_) {
        payload = undefined;
      }

      const message = payload && typeof payload === 'object' ? payload.message : undefined;
      const code = payload && typeof payload === 'object' ? payload.code : undefined;

      if (response.status === 422) {
        throw new ApiError(422, code || 'schema_validation_error', message || 'Request failed schema validation', payload && payload.errors);
      }

      if (response.status === 503) {
        throw new ApiError(503, code || 'service_unavailable', message || 'Service unavailable');
      }

      throw new ApiError(response.status, code || 'http_error', message || `HTTP ${response.status}`);
    }

    // Success path
    if (isJsonResponse(response)) {
      return await response.json();
    }
    return await response.text();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new ApiError(408, 'request_timeout', 'Request timed out');
    }
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(0, 'network_error', error?.message || 'Network error');
  }
}



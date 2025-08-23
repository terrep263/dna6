// Vercel/Netlify-compatible serverless function
// Path: /api/report
// - Returns 422 for schema validation errors
// - Returns 503 if OPENAI_API_KEY is missing on the server

export default async function handler(req, res) {
  try {
    const method = req.method || 'GET';
    if (method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ code: 'method_not_allowed', message: 'Use POST' });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({ code: 'missing_server_key', message: 'Server is not configured' });
    }

    let payload;
    try {
      payload = req.body ?? {};
      if (!payload || Object.keys(payload).length === 0) {
        // Some platforms require explicit parsing
        const text = await readRequestBody(req);
        payload = text ? JSON.parse(text) : {};
      }
    } catch (_) {
      return res.status(400).json({ code: 'invalid_json', message: 'Invalid JSON payload' });
    }

    // Basic schema validation example
    const { userId, answers } = payload;
    if (typeof userId !== 'string' || !Array.isArray(answers)) {
      return res.status(422).json({
        code: 'schema_violation',
        message: 'Invalid payload',
        errors: {
          userId: 'string required',
          answers: 'array required',
        },
      });
    }

    // Placeholder business logic; do not expose apiKey to client
    // Simulate processing
    const result = {
      reportId: `r_${Date.now()}`,
      summary: 'Assessment processed',
    };

    return res.status(200).json(result);
  } catch (err) {
    console.error('api/report error', err);
    return res.status(500).json({ code: 'internal_error', message: 'Unexpected error' });
  }
}

// Helper to read raw body when a platform does not pre-parse
function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    try {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => resolve(data));
      req.on('error', reject);
    } catch (e) {
      reject(e);
    }
  });
}



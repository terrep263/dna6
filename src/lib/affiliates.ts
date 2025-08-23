interface AffiliateParams {
  ref?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

// Capture affiliate parameters on first load
const captureAffiliateParams = (): void => {
  // Only capture once per session
  if (localStorage.getItem('affiliateCaptured') === 'true') {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const affiliateParams: AffiliateParams = {};

  // Capture ref parameter
  const ref = urlParams.get('ref');
  if (ref) {
    affiliateParams.ref = ref;
  }

  // Capture UTM parameters
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  utmParams.forEach(param => {
    const value = urlParams.get(param);
    if (value) {
      affiliateParams[param as keyof AffiliateParams] = value;
    }
  });

  // Store affiliate parameters if any were found
  if (Object.keys(affiliateParams).length > 0) {
    localStorage.setItem('affiliateParams', JSON.stringify(affiliateParams));
  }

  // Mark as captured
  localStorage.setItem('affiliateCaptured', 'true');
};

// Get stored affiliate parameters
const getAffiliateParams = (): AffiliateParams => {
  const stored = localStorage.getItem('affiliateParams');
  return stored ? JSON.parse(stored) : {};
};

// Append affiliate parameters to a given URL
export const appendAffiliateParams = (url: string): string => {
  const affiliateParams = getAffiliateParams();
  
  if (Object.keys(affiliateParams).length === 0) {
    return url;
  }

  const urlObj = new URL(url);
  
  // Append each affiliate parameter
  Object.entries(affiliateParams).forEach(([key, value]) => {
    if (value) {
      urlObj.searchParams.set(key, value);
    }
  });

  return urlObj.toString();
};

// Initialize affiliate capture on module load
if (typeof window !== 'undefined') {
  captureAffiliateParams();
}

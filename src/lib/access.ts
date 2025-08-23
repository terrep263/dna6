const TRIAL_LENGTH_DAYS = parseInt(import.meta.env.VITE_PREMIUM_UNLOCK_DAYS || '7');

export const setTrialStart = (ms: number): void => {
  localStorage.setItem('trialStart', ms.toString());
};

export const getTrialStart = (): number | null => {
  const stored = localStorage.getItem('trialStart');
  return stored ? parseInt(stored) : null;
};

export const getTrialStatus = (): { 
  isTrial: boolean; 
  day: number; 
  msRemaining: number; 
  ended: boolean; 
} => {
  const trialStart = getTrialStart();
  if (!trialStart) {
    return { isTrial: false, day: 0, msRemaining: 0, ended: false };
  }

  const now = Date.now();
  const elapsed = now - trialStart;
  const day = Math.floor(elapsed / (24 * 60 * 60 * 1000));
  const msRemaining = (TRIAL_LENGTH_DAYS * 24 * 60 * 60 * 1000) - elapsed;
  const ended = day >= TRIAL_LENGTH_DAYS;

  return {
    isTrial: true,
    day: Math.min(day, TRIAL_LENGTH_DAYS - 1),
    msRemaining: Math.max(0, msRemaining),
    ended
  };
};

export const setSubscribed = (value: boolean): void => {
  localStorage.setItem('subscribed', value.toString());
};

export const isSubscribed = (): boolean => {
  return localStorage.getItem('subscribed') === 'true';
};

export const canAccessDay = (n: number): boolean => {
  const trialStatus = getTrialStatus();
  return trialStatus.isTrial && !trialStatus.ended && trialStatus.day >= n;
};

export const canAccessPremium = (): boolean => {
  return isSubscribed();
};

const BROWSER_FRONT_URL =
  typeof window !== 'undefined' &&
  window &&
  window.FRONT_URL &&
  window.FRONT_URL !== '__FRONT_URL__'
    ? window.FRONT_URL
    : null;

export const FRONT_URL =
  BROWSER_FRONT_URL ||
  process.env.FRONT_URL ||
  'https://accessible.preprod.makeorg.tech';

export const SESSION_ID_COOKIE_KEY = 'x-session-id';
export const APP_NAME = 'main-front';

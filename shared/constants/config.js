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
  'https://app.preprod.makeorg.tech';

export const SESSION_ID_COOKIE_KEY = 'x-session-id';
export const APP_NAME = 'main-front';
export const GOOGLE_LOGIN_ID =
  '810331964280-qtdupbrjusihad3b5da51i5p66qpmhmr.apps.googleusercontent.com';

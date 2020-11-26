import csp from 'helmet-csp';
import { apiUrl, frontUrl } from 'Server/configuration';

export const cspMiddleware = csp({
  // Specify directives as normal.
  directives: {
    baseUri: ["'self'"],
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      'https://connect.facebook.net',
      'https://staticxx.facebook.com',
      'http://platform.twitter.com',
      'http://static.ads-twitter.com',
      'https://apis.google.com',
      'https://analytics.twitter.com',
      'https://analytics.twitter.com',
      'https://sc-static.net',
      (req, res) => `'nonce-${res.locals.nonce}'`,
    ],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ['*', 'data:'],
    connectSrc: [
      "'self'",
      apiUrl,
      frontUrl,
      'https://*.makeorg.tech',
      'https://*.make.org',
      'https://*.placebymake.org',
      'https://*.facebook.com',
      'https://*.facebook.net',
    ],
    formAction: [
      "'self'",
      'https://www.facebook.com/tr/',
      'https://tr.snapchat.com',
    ],
    frameSrc: [
      'https://*.facebook.com',
      'https://*.google.com',
      'https://tr.snapchat.com',
    ],
    objectSrc: ["'none'"],
    mediaSrc: ["'none'"],
    frameAncestors: ["'none'"],
  },
});

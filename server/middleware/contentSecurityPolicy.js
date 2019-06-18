import csp from 'helmet-csp';

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
      'https://static.ads-twitter.com',
      'https://apis.google.com',
      (req, res) => `'nonce-${res.locals.nonce}'`,
    ],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ['*'],
    connectSrc: [
      "'self'",
      'https://*.makeorg.tech',
      'https://*.make.org',
      'https://*.facebook.com',
      'https://*.facebook.net',
    ],
    formAction: ["'self'", 'https://www.facebook.com/tr/'],
    frameSrc: ['https://*.facebook.com', 'https://*.google.com'],
    objectSrc: ["'none'"],
    mediaSrc: ["'none'"],
    frameAncestors: ["'none'"],
  },

  // Set to true if you want to disable CSP on Android where it can be buggy.
  disableAndroid: true,
});

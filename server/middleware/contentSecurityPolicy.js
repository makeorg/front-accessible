const csp = require('helmet-csp');

export const cspMiddleware = csp({
  // Specify directives as normal.
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      'https://*.facebook.net',
      'https://*.facebook.com',
      'http://*.twitter.com',
      'https://*.ads-twitter.com',
      'https://*.google.com',
      "'unsafe-inline'",
    ],
    styleSrc: ["'unsafe-inline'"],
    imgSrc: [
      "'self'",
      'https://*.facebook.com',
      'http://t.co',
      'https://*.fbsbx.com',
      'https://*.googleusercontent.com',
    ],
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

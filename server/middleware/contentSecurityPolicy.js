const csp = require('helmet-csp');

export const cspMiddleware = csp({
  // Specify directives as normal.
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      '*.facebook.net',
      '*.facebook.com',
      '*.twitter.com',
      '*.ads-twitter.com',
      '*.google.com',
      "'unsafe-inline'"
    ],
    styleSrc: ["'unsafe-inline'"],
    imgSrc: [
      "'self'",
      '*.facebook.com',
      't.co'
    ],
    connectSrc: [
      "'self'",
      '*.makeorg.tech',
      '*.make.org',
      '*.facebook.com',
      '*.facebook.net'
    ],
    formAction: ["'self'", '*.facebook.com', '*.facebook.net'],
    frameSrc: [
      '*.facebook.com',
      '*.google.com'
    ],
    objectSrc: ["'none'"],
    mediaSrc: ["'none'"],
    frameAncestors: ["'none'"]
  },

  // Set to true if you want to disable CSP on Android where it can be buggy.
  disableAndroid: true
});

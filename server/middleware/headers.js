export const headersResponseMiddleware = (req, res, next) => {
  res.setHeader('Server', 'Express');
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload;'
  );

  return next();
};

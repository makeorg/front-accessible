export const headersResponseMiddleware = (req, res, next) => {
  res.setHeader('Server', 'Express');

  return next();
};

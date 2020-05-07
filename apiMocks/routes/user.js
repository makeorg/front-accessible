const jsonServer = require('json-server');

const userRouter = jsonServer.create();

userRouter.use('/me', (req, res) => {
  return res.sendStatus(401);
});

userRouter.use('/current', (req, res) => {
  return res.sendStatus(401);
});

module.exports = userRouter;

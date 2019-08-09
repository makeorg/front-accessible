const jsonServer = require('json-server');

const userRouter = jsonServer.create();

userRouter.use('/me', (req, res) => {
  res.sendStatus(401);
});

module.exports = userRouter;

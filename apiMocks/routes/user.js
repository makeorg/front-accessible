const jsonServer = require('json-server');

const userRouter = jsonServer.create();

userRouter.use('/me', (req, res) => {
  return res.sendStatus(401);
});

module.exports = userRouter;

const jsonServer = require('json-server');
const path = require('path');
const proposalsRouter = require('./routes/proposals');
const userRouter = require('./routes/user');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use('/views', jsonServer.router(path.join(__dirname, 'db/views.json')));
server.use('/user', userRouter);
server.use('/proposals', proposalsRouter);
server.use('/tracking/front', (req, res) => {
  res.sendStatus(204);
});

server.listen(9000, () => {
  console.log('JSON Server is running');
});

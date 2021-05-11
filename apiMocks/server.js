const jsonServer = require('json-server');
const proposalsRouter = require('./routes/proposals');
const questionsRouter = require('./routes/questions');
const userRouter = require('./routes/user');
const tagsRouter = require('./routes/tags');
const organisationsRouter = require('./routes/organisations');
const viewsRouter = require('./routes/views');
const oauthRouter = require('./routes/oauth');

const server = jsonServer.create();
const middlewares = jsonServer.defaults({ logger: false });

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use('/questions', questionsRouter);
server.use('/user', userRouter);
server.use('/proposals', proposalsRouter);
server.use('/tags', tagsRouter);
server.use('/organisations', organisationsRouter);
server.use('/views', viewsRouter);
server.use('/tracking/front', (req, res) => res.sendStatus(204));
server.use(
  jsonServer.rewriter({
    '/:resource\\?:params': '/:resource/data?:params',
    '/:resource': '/:resource/data',
  })
);
server.use('/oauth', oauthRouter);
server.use('/logout', (req, res) => {
  res.clearCookie('mockIsConnected').sendStatus('204');
});
server.listen(9000, () => {
  console.log('JSON Server is running');
});

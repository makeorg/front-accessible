const jsonServer = require('json-server');

const questionsRouter = jsonServer.create();
const questionsData = require('../db/questions.json').data;

questionsRouter.get('/', (req, res) => {
  return res.send(questionsData);
});

questionsRouter.get('/:questionSlug/details', (req, res) => {
  const questionData = questionsData.find(
    question => question.slug === req.params.questionSlug
  );

  return res.send(questionData);
});

module.exports = questionsRouter;

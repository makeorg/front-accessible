const jsonServer = require('json-server');
const { fixtures } = require('../fixtures/generator');

const questionsRouter = jsonServer.create();

questionsRouter.get('/', (req, res) => {
  return res.send(fixtures.questions);
});

questionsRouter.get('/:questionIdOrQuestionSlug/details', (req, res) => {
  const questionDataById = fixtures.questions.find(
    question => question.questionId === req.params.questionIdOrQuestionSlug
  );
  const questionDataBySlug = fixtures.questions.find(
    question => question.slug === req.params.questionIdOrQuestionSlug
  );

  return res.send(questionDataById || questionDataBySlug);
});

questionsRouter.get('/:questionId/partners', (req, res) => {
  return res.send({
    total: fixtures.partners.length,
    results: fixtures.partners,
  });
});

questionsRouter.get('/:questionId/popular-tags', (req, res) => {
  return res.send(fixtures.popularTags);
});

questionsRouter.get('/:questionId/start-sequence', (req, res) => {
  const proposalsOfQuestion = fixtures.proposals.filter(proposal => {
    return proposal.question.questionId === req.params.questionId;
  });
  const proposals = proposalsOfQuestion.slice(0, 12);
  return res.send({
    id: 'sequence-id',
    proposals,
  });
});

module.exports = questionsRouter;

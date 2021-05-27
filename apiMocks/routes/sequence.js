const jsonServer = require('json-server');
const { fixtures } = require('../fixtures/generator');

const sequenceRouter = jsonServer.create();

sequenceRouter.get('/standard/:questionId', (req, res) => {
  const proposalsOfQuestion = fixtures.proposals.filter(
    proposal => proposal.question.questionId === req.params.questionId
  );
  let proposals;
  if (req.params.questionId === 'question-3-id') {
    proposals = proposalsOfQuestion.slice(0, 2);
  } else {
    proposals = proposalsOfQuestion.slice(0, 12);
  }

  if (req.query && req.query.include) {
    proposals[0] = fixtures.proposals.find(
      proposal => proposal.id === req.query.include
    );
  }

  return res.send({
    proposals,
  });
});

module.exports = sequenceRouter;

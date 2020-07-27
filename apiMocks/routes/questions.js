const jsonServer = require('json-server');
const { fixtures } = require('../fixtures/generator');

const questionsRouter = jsonServer.create();

const getLimitAndSkip = (questions, req) => {
  return questions.slice(
    parseInt(req.query.skip, 10),
    parseInt(req.query.limit, 10) + parseInt(req.query.skip, 10)
  );
};

questionsRouter.get('/', (req, res) => {
  const { status } = req.query;

  if (status === 'open') {
    return res.send({
      total: fixtures.openedHomepageQuestions.length,
      results: getLimitAndSkip(fixtures.openedHomepageQuestions, req),
    });
  }

  if (status === 'finished') {
    return res.send({
      total: fixtures.finishedHomepageQuestions.length,
      results: getLimitAndSkip(fixtures.finishedHomepageQuestions, req),
    });
  }

  if (status === 'upcoming') {
    return res.send({
      total: fixtures.upcomingHomepageQuestions.length,
      results: getLimitAndSkip(fixtures.upcomingHomepageQuestions, req),
    });
  }

  const allHomepageQuestions = fixtures.openedHomepageQuestions
    .concat(fixtures.finishedHomepageQuestions)
    .concat(fixtures.upcomingHomepageQuestions);

  return res.send({
    total: allHomepageQuestions.length,
    results: getLimitAndSkip(allHomepageQuestions, req),
  });
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
  let proposals;
  if (req.params.questionId === 'question-3-id') {
    proposals = proposalsOfQuestion.slice(0, 2);
  } else {
    proposals = proposalsOfQuestion.slice(0, 12);
  }
  return res.send({
    id: 'sequence-id',
    proposals,
  });
});

questionsRouter.get('/:questionId/top-ideas', (req, res) => {
  const questionTopIdeas = fixtures.topIdeas.filter(topIdea => {
    return topIdea.questionId === req.params.questionId;
  });

  return res.send({
    questionTopIdeas,
    seed: 12312313,
  });
});

questionsRouter.get('/:questionId/top-ideas/:topIdeaId', (req, res) => {
  const questionTopIdeas = fixtures.topIdeas.filter(topIdea => {
    return (
      topIdea.questionId === req.params.questionId &&
      topIdea.id === req.params.topIdeaId
    );
  });

  return res.send(questionTopIdeas[0] ? questionTopIdeas[0] : []);
});

module.exports = questionsRouter;

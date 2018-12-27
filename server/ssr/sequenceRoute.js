import QuestionService from '../../src/api/QuestionService';

const reactRender = require('../reactRender');

async function getQuestion(questionSlug) {
  return QuestionService.getDetail(questionSlug);
}

module.exports = async function SequenceRoute(req, res) {
  const question = await getQuestion(req.params.questionSlug);
  const { firstProposal } = req.query;

  let sequenceState = {
    sequence: {
      question
    }
  };

  if (firstProposal) {
    sequenceState = {
      ...sequenceState,
      firstProposal
    };
  }

  return reactRender(req, res, sequenceState);
};

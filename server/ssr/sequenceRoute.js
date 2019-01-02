import QuestionService from '../../src/api/QuestionService';

const reactRender = require('../reactRender');

async function getQuestion(questionSlug) {
  return QuestionService.getDetail(questionSlug);
}

module.exports = async function SequenceRoute(req, res) {
  try {
    const question = await getQuestion(req.params.questionSlug);
    const { firstProposal } = req.query;

    let sequenceState = {
      sequence: {
        question,
        votedProposalIds: []
      }
    };

    if (firstProposal) {
      sequenceState = {
        sequence: {
          ...sequenceState.sequence,
          ...{ firstProposal }
        }
      };
    }

    return reactRender(req, res, sequenceState);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

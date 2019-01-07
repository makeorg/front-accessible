import QuestionService from '../../src/api/QuestionService';
import SequenceService from '../../src/api/SequenceService';
import { disableExtraSlidesByQuery } from './helpers/query.helper';

const reactRender = require('../reactRender');

async function getQuestion(questionSlug) {
  return QuestionService.getDetail(questionSlug);
}

async function getQuestionConfiguration(questionSlug, country) {
  return SequenceService.fetchConfiguration(questionSlug, country);
}

module.exports = async function SequenceRoute(req, res) {
  try {
    const { questionSlug } = req.params;
    const question = await getQuestion(questionSlug);
    const questionConfiguration = await getQuestionConfiguration(questionSlug, question.country);
    const { sequenceExtraSlides } = questionConfiguration;
    questionConfiguration.sequenceExtraSlides = disableExtraSlidesByQuery(sequenceExtraSlides, req.query);

    const { firstProposal } = req.query;

    let sequenceState = {
      sequence: {
        question,
        questionConfiguration,
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

import { createInitialState } from 'Shared/store/initialState';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { isInProgress } from 'Shared/helpers/date';
import { updateTrackingQuestionParam } from 'Shared/store/middleware/tracking';
import { disableExtraSlidesByQuery } from './helpers/query.helper';
import { reactRender } from '../reactRender';
import { QuestionService } from '../service/QuestionService';

export const sequenceRoute = async (req, res) => {
  const routeState = createInitialState();

  const { questionSlug, country, language } = req.params;
  const question: TypeQuestion = await QuestionService.getQuestion(
    questionSlug,
    country,
    language
  );

  if (!question) {
    return reactRender(req, res.status(404), routeState);
  }

  if (!isInProgress(question) && !question.displayResults) {
    return res.redirect(question.aboutUrl);
  }

  const { sequenceConfig } = question;
  question.sequenceConfig = disableExtraSlidesByQuery(
    sequenceConfig,
    req.query
  );

  routeState.currentQuestion = questionSlug;
  routeState.questions = {
    [questionSlug]: {
      question,
    },
  };
  updateTrackingQuestionParam(question);

  const { firstProposal } = req.query;
  if (firstProposal) {
    routeState.sequence = {
      ...routeState.sequence,
      firstProposal,
    };
  }

  return reactRender(req, res, routeState);
};

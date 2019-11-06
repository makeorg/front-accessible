import { createInitialState } from 'Shared/store/initialState';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { isInProgress } from 'Shared/helpers/date';
import { updateRequestContextQuestion } from 'Shared/store/middleware/requestContext';
import { disableExtraSlidesByQuery } from './helpers/query.helper';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';
import { getQuestion } from '../service/QuestionService';

export const sequenceRoute = async (req, res) => {
  const routeState = createInitialState();

  try {
    const { questionSlug } = req.params;
    const question: TypeQuestion = await getQuestion(questionSlug);

    // @TODO add !questionResults when results will be ready
    if (!isInProgress(question)) {
      return res.redirect(question.aboutUrl);
    }

    if (question) {
      const { sequenceConfig } = question;
      question.sequenceConfig = disableExtraSlidesByQuery(
        sequenceConfig,
        req.query
      );
    }

    const { firstProposal } = req.query;

    routeState.currentQuestion = questionSlug;
    routeState.questions = {
      [questionSlug]: {
        question,
      },
    };
    updateRequestContextQuestion(question);

    if (firstProposal) {
      routeState.sequence = {
        ...routeState.sequence,
        firstProposal,
      };
    }
  } catch (error) {
    logError(error);
    return res.send(error);
  }

  return reactRender(req, res, routeState);
};

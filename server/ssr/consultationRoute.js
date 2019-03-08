import { QuestionService } from 'Shared/api/QuestionService';
import { SequenceService } from 'Shared/api/SequenceService';
import { createInitialState } from 'Shared/store/initialState';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';

async function getQuestion(questionSlug, headers) {
  return QuestionService.getDetail(questionSlug, headers);
}

async function getQuestionConfiguration(questionSlug) {
  return SequenceService.fetchConfiguration(questionSlug);
}

export const consultationRoute = async (req, res) => {
  let routeState = {};

  try {
    const initialState = createInitialState();
    const { questionSlug } = req.params;
    const question = await getQuestion(questionSlug);
    const questionConfiguration = await getQuestionConfiguration(questionSlug);

    routeState = {
      sequence: {
        ...initialState.sequence,
        questionId: question.questionId,
      },
      questions: {
        [question.questionId]: {
          question,
          questionConfiguration,
        },
      },
    };
  } catch (error) {
    logError(error);

    return res.send(error);
  }

  return reactRender(req, res, routeState);
};

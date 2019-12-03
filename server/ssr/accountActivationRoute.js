import { UserApiService } from 'Shared/api/UserApiService';
import { HTTP_NO_CONTENT } from 'Shared/constants/httpStatus';
import { createInitialState } from 'Shared/store/initialState';
import {
  ACTIVATION_SUCCESS_MESSAGE,
  ACTIVATION_FAILURE_MESSAGE,
  NOTIFICATION_LEVEL_SUCCESS,
  NOTIFICATION_LEVEL_ERROR,
} from 'Shared/constants/notification';
import { updateTrackingQuestionParam } from 'Shared/store/middleware/tracking';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';
import { getQuestion } from '../service/QuestionService';

async function postAccountActivation(
  userId: string,
  verificationToken: string,
  headers
) {
  return UserApiService.verifyUser(userId, verificationToken, headers);
}

export const accountActivationRoute = async (req, res) => {
  const routeState = createInitialState();
  const { userId, verificationToken, country, language } = req.params;

  try {
    const questionId = req.query.question;
    if (questionId) {
      const question = await getQuestion(questionId, {
        'x-make-question-id': questionId,
        'x-make-country': country,
        'x-make-language': language,
      });

      if (question) {
        routeState.currentQuestion = question.slug;
        updateTrackingQuestionParam(question);
        routeState.questions = {
          [question.slug]: {
            question,
          },
        };
      } else {
        logError(
          `Question not found on activate account questionId='${questionId}' request='${JSON.stringify(
            {
              url: req.url,
              query: req.query,
            }
          )}'`
        );
      }
    }

    const status = await postAccountActivation(userId, verificationToken, {
      'x-make-question-id': questionId || '',
      'x-make-country': country,
      'x-make-language': language,
    });

    if (status === HTTP_NO_CONTENT) {
      routeState.notification = {
        level: NOTIFICATION_LEVEL_SUCCESS,
        contentType: ACTIVATION_SUCCESS_MESSAGE,
      };
    }
  } catch (error) {
    logError(error);
    routeState.notification = {
      level: NOTIFICATION_LEVEL_ERROR,
      contentType: ACTIVATION_FAILURE_MESSAGE,
    };
  }

  return reactRender(req, res, routeState);
};

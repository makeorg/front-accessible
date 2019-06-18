import { UserApiService } from 'Shared/api/UserApiService';
import { notificationConstants } from 'Shared/constants/notification';
import { HTTP_NO_CONTENT, HTTP_NOT_FOUND } from 'Shared/constants/httpStatus';
import { createInitialState } from 'Shared/store/initialState';
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
        'x-make-question': questionId,
        'x-make-question-id': questionId,
        'x-make-country': country,
        'x-make-language': language,
      });

      if (question) {
        routeState.sequence.questionSlug = question.slug;
        routeState.questions = {
          [question.slug]: {
            question,
          },
        };
      } else {
        logError(`Question not found on activate account ${questionId}`);
      }
    }

    const status = await postAccountActivation(userId, verificationToken, {
      'x-make-question': questionId,
      'x-make-question-id': questionId,
      'x-make-country': country,
      'x-make-language': language,
    });

    if (status === HTTP_NO_CONTENT) {
      routeState.notification.contentType =
        notificationConstants.ACTIVATION_SUCCESS_CONTENT;
    }

    if (status === HTTP_NOT_FOUND) {
      routeState.notification.contentType =
        notificationConstants.ACTIVATION_FAILURE_CONTENT;
    }
  } catch (error) {
    logError(error);
    res.send(error);
  }

  return reactRender(req, res, routeState);
};

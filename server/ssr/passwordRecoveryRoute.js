import { UserApiService } from 'Shared/api/UserApiService';
import {
  PASSWORD_RECOVERY_FAILURE_MESSAGE,
  NOTIFICATION_LEVEL_ERROR,
} from 'Shared/constants/notification';
import { HTTP_NO_CONTENT } from 'Shared/constants/httpStatus';
import { createInitialState } from 'Shared/store/initialState';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';
import { getQuestion } from '../service/QuestionService';

async function postResetPasswordTokenCheck(
  userId: string,
  resetToken: string,
  headers
) {
  return UserApiService.resetPasswordTokenCheck(userId, resetToken, headers);
}

export const passwordRecoveryRoute = async (req, res) => {
  const initialState = createInitialState();
  const { resetToken, userId, country, language } = req.params;
  const routeState = {
    ...initialState,
    user: {
      ...initialState.user,
      passwordRecovery: {
        validToken: false,
        resetToken,
        userId,
      },
    },
  };

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
        routeState.questions = {
          [question.slug]: {
            question,
          },
        };
      }
    }

    const status = await postResetPasswordTokenCheck(userId, resetToken, {
      'x-make-question-id': questionId,
      'x-make-country': country,
      'x-make-language': language,
    });

    if (status === HTTP_NO_CONTENT) {
      routeState.user.passwordRecovery.validToken = true;
      routeState.user.passwordRecovery.resetToken = resetToken;
    }
  } catch (error) {
    logError(error);
    routeState.notification = {
      level: NOTIFICATION_LEVEL_ERROR,
      contentType: PASSWORD_RECOVERY_FAILURE_MESSAGE,
    };
  }

  return reactRender(req, res, routeState);
};

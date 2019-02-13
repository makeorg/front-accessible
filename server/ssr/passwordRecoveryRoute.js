import UserService from 'Shared/api/UserService';
import { QuestionService } from 'Shared/api/QuestionService';
import { notificationConstants } from 'Shared/constants/notification';
import { HTTP_NO_CONTENT, HTTP_NOT_FOUND } from 'Shared/constants/httpStatus';
import { createInitialState } from 'Shared/store/initialState';
import { logger } from '../logger';
import { reactRender } from '../reactRender';

async function getQuestion(questionId, headers) {
  return QuestionService.getDetail(questionId, headers);
}

async function postResetPasswordTokenCheck(userId: string, resetToken: string, headers) {
  return UserService.resetPasswordTokenCheck(userId, resetToken, headers);
}

export const passwordRecoveryRoute = async (req, res) => {
  const initialState = createInitialState();
  const {
    resetToken,
    userId,
    country,
    language
  } = req.params;
  const routeState = {
    ...initialState,
    user: {
      ...initialState.user,
      passwordRecovery: {
        validToken: false,
        resetToken,
        userId
      }
    }
  };

  try {
    const questionId = req.query.question;

    if (questionId) {
      const question = await getQuestion(questionId, {
        'x-make-question': questionId,
        'x-make-question-id': questionId,
        'x-make-country': country,
        'x-make-language': language
      });

      if (question) {
        routeState.sequence.question = question;
      }
    }

    const status = await postResetPasswordTokenCheck(userId, resetToken, {
      'x-make-question': questionId,
      'x-make-question-id': questionId,
      'x-make-country': country,
      'x-make-language': language
    });

    if (status === HTTP_NO_CONTENT) {
      routeState.user.passwordRecovery.validToken = true;
      routeState.user.passwordRecovery.resetToken = resetToken;
    }

    if (status === HTTP_NOT_FOUND) {
      routeState.notification.contentType = notificationConstants.PASSWORD_RECOVERY_FAILURE_CONTENT;
      routeState.notification.status = status;
    }

    return reactRender(req, res, routeState);
  } catch (error) {
    if (error && error.stack) {
      const { stack } = error;
      logger.log('error', stack);
    }

    return res.send(error);
  }
};

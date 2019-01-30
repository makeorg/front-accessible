import UserService from 'Shared/api/UserService';
import QuestionService from 'Shared/api/QuestionService';
import { notificationConstants } from 'Shared/constants/notification';
import { HTTP_NO_CONTENT, HTTP_NOT_FOUND } from 'Shared/constants/httpStatus';
import { initialState } from 'Shared/store/initialState';
import { logger } from '../logger';

const reactRender = require('../reactRender');

async function getQuestion(questionId) {
  return QuestionService.getDetail(questionId);
}

async function postResetPasswordTokenCheck(userId: string, resetToken: string) {
  return UserService.resetPasswordTokenCheck(userId, resetToken);
}

module.exports = async function passwordRecoveryRoute(req, res) {
  const { resetToken, userId } = req.params;
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
    const status = await postResetPasswordTokenCheck(userId, resetToken);
    if (status === HTTP_NO_CONTENT) {
      routeState.user.passwordRecovery.validToken = true;
      routeState.user.passwordRecovery.resetToken = resetToken;
    }

    if (status === HTTP_NOT_FOUND) {
      routeState.notification.contentType = notificationConstants.PASSWORD_RECOVERY_FAILURE_CONTENT;
      routeState.notification.status = status;
    }

    if (req.query.question) {
      const question = await getQuestion(req.query.question);
      if (question) {
        routeState.sequence.question = question;
      }
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

import UserService from 'Shared/api/UserService';
import QuestionService from 'Shared/api/QuestionService';
import { notificationConstants } from 'Shared/constants/notification';
import { HTTP_NO_CONTENT, HTTP_NOT_FOUND } from 'Shared/constants/httpStatus';
import { createInitialState } from 'Shared/store/initialState';
import { logger } from '../logger';

const reactRender = require('../reactRender');

async function getQuestion(questionId) {
  return QuestionService.getDetail(questionId);
}

async function postAccountActivation(userId: string, verificationToken: string) {
  return UserService.verifyUser(userId, verificationToken);
}

module.exports = async function AccountActivationRoute(req, res) {
  const routeState = createInitialState();
  try {
    const { verificationToken, userId } = req.params;
    const status = await postAccountActivation(userId, verificationToken);
    if (status === HTTP_NO_CONTENT) {
      routeState.notification.contentType = notificationConstants.ACTIVATION_SUCCESS_CONTENT;
    }

    if (status === HTTP_NOT_FOUND) {
      routeState.notification.contentType = notificationConstants.ACTIVATION_FAILURE_CONTENT;
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

    res.send(error);
  }
};

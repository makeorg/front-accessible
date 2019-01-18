import UserService from 'Api/UserService';
import QuestionService from 'Api/QuestionService';
import { notificationConstants } from 'Shared/constants/notification';
import { HTTP_NO_CONTENT, HTTP_NOT_FOUND } from 'Shared/constants/httpStatus';
import { logger } from '../logger';

const reactRender = require('../reactRender');

async function getQuestion(questionId) {
  return QuestionService.getDetail(questionId);
}

async function postAccountActivation(userId: string, verificationToken: string) {
  return UserService.verifyUser(userId, verificationToken);
}

module.exports = async function AccountActivationRoute(req, res) {
  const initialState = { notification: { contentType: undefined }, sequence: {} };
  try {
    const { verificationToken, userId } = req.params;
    const status = await postAccountActivation(userId, verificationToken);
    if (status === HTTP_NO_CONTENT) {
      initialState.notification.contentType = notificationConstants.ACTIVATION_SUCCESS_CONTENT;
    }

    if (status === HTTP_NOT_FOUND) {
      initialState.notification.contentType = notificationConstants.ACTIVATION_FAILURE_CONTENT;
      initialState.notification.status = status;
    }

    if (req.query.question) {
      const question = await getQuestion(req.query.question);
      if (question) {
        initialState.sequence.question = question;
      }
    }

    return reactRender(req, res, initialState);
  } catch (error) {
    if (error && error.stack) {
      const { stack } = error;
      logger.log('error', stack);
    }

    res.send(error);
  }
};

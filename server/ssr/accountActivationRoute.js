import UserService from 'Api/UserService';
import { notificationConstants } from 'Shared/constants/notification';
import { logger } from '../logger';

const reactRender = require('../reactRender');

async function postAccountActivation(userId: string, verificationToken: string) {
  return UserService.verifyUser(userId, verificationToken);
}

module.exports = async function AccountActivationRoute(req, res) {
  const initialState = { notification: { contentType: undefined } };
  try {
    const { verificationToken, userId } = req.params;
    const status = await postAccountActivation(userId, verificationToken);
    if (status === 404 || status === 500) {
      initialState.notification.contentType = notificationConstants.ACTIVATION_FAILURE_CONTENT;
      initialState.notification.status = status;
    } else {
      initialState.notification.contentType = notificationConstants.ACTIVATION_SUCCESS_CONTENT;
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

import UserService from 'Shared/api/UserService';
import QuestionService from 'Shared/api/QuestionService';
import { notificationConstants } from 'Shared/constants/notification';
import { HTTP_NO_CONTENT, HTTP_NOT_FOUND } from 'Shared/constants/httpStatus';
import { createInitialState } from 'Shared/store/initialState';
import { logger } from '../logger';
import { reactRender } from '../reactRender';

async function getQuestion(questionId, headers) {
  return QuestionService.getDetail(questionId, headers);
}

async function postAccountActivation(userId: string, verificationToken: string, headers) {
  return UserService.verifyUser(userId, verificationToken, headers);
}

export const accountActivationRoute = async (req, res) => {
  const routeState = createInitialState();
  const {
    userId,
    verificationToken,
    country,
    language
  } = req.params;

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

    const status = await postAccountActivation(userId, verificationToken, {
      'x-make-question': questionId,
      'x-make-question-id': questionId,
      'x-make-country': country,
      'x-make-language': language
    });

    if (status === HTTP_NO_CONTENT) {
      routeState.notification.contentType = notificationConstants.ACTIVATION_SUCCESS_CONTENT;
    }

    if (status === HTTP_NOT_FOUND) {
      routeState.notification.contentType = notificationConstants.ACTIVATION_FAILURE_CONTENT;
    }
  } catch (error) {
    if (error && error.stack) {
      const { stack } = error;
      logger.log('error', stack);
    }

    res.send(error);
  }

  return reactRender(req, res, routeState);
};

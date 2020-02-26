import { createInitialState } from 'Shared/store/initialState';
import {
  ACTIVATION_SUCCESS_MESSAGE,
  ACTIVATION_FAILURE_MESSAGE,
  NOTIFICATION_LEVEL_SUCCESS,
  NOTIFICATION_LEVEL_ERROR,
} from 'Shared/constants/notification';
import { updateTrackingQuestionParam } from 'Shared/store/middleware/tracking';
import { UserService } from '../service/UserService';
import { reactRender } from '../reactRender';
import { QuestionService } from '../service/QuestionService';
import { logError } from './helpers/ssr.helper';

export const accountActivationRoute = async (req, res) => {
  const routeState = createInitialState();
  const { userId, verificationToken, country, language } = req.params;
  // empty question when register on home page
  const questionId = req.query.question || '';
  const notificationError = {
    level: NOTIFICATION_LEVEL_ERROR,
    contentType: ACTIVATION_FAILURE_MESSAGE,
  };
  const notificationSuccess = {
    level: NOTIFICATION_LEVEL_SUCCESS,
    contentType: ACTIVATION_SUCCESS_MESSAGE,
  };

  if (questionId !== '') {
    const notFound = () => {
      logError(
        `Question not found on activate account questionId='${questionId}' request='${JSON.stringify(
          {
            url: req.url,
            query: req.query,
          }
        )}'`
      );
    };
    const unexpectedError = () => {
      logError(
        `Unexpected error on activate account questionId='${questionId}' request='${JSON.stringify(
          {
            url: req.url,
            query: req.query,
          }
        )}'`
      );
    };
    const question = await QuestionService.getQuestion(
      questionId,
      country,
      language,
      notFound,
      unexpectedError
    );

    if (!question) {
      routeState.notification = notificationError;

      return reactRender(req, res, routeState);
    }

    routeState.currentQuestion = question.slug;
    updateTrackingQuestionParam(question);
    routeState.questions = {
      [question.slug]: {
        question,
      },
    };
  }

  const success = () => {
    routeState.notification = notificationSuccess;
  };
  const failure = () => {
    routeState.notification = notificationError;
  };
  await UserService.verifyUser(
    userId,
    verificationToken,
    country,
    language,
    questionId,
    success,
    failure
  );

  return reactRender(req, res, routeState);
};

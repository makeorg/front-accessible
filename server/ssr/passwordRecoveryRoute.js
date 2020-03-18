import {
  PASSWORD_RECOVERY_FAILURE_MESSAGE,
  NOTIFICATION_LEVEL_ERROR,
} from 'Shared/constants/notification';
import { createInitialState } from 'Shared/store/initialState';
import { updateTrackingQuestionParam } from 'Shared/store/middleware/tracking';
import { UserService } from '../service/UserService';
import { reactRender } from '../reactRender';
import { QuestionService } from '../service/QuestionService';
import { logError } from './helpers/ssr.helper';

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

  const questionId = req.query.question || '';
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
    const question = await QuestionService.getQuestion(
      questionId,
      country,
      language,
      notFound
    );

    if (question) {
      routeState.currentQuestion = question.slug;
      routeState.questions = {
        [question.slug]: {
          question,
        },
      };
      updateTrackingQuestionParam(question);
    }
  }

  const success = () => {
    routeState.user.passwordRecovery.validToken = true;
    routeState.user.passwordRecovery.resetToken = resetToken;
  };
  const failure = () => {
    routeState.notification = {
      level: NOTIFICATION_LEVEL_ERROR,
      contentType: PASSWORD_RECOVERY_FAILURE_MESSAGE,
    };
  };
  await UserService.resetPasswordTokenCheck(
    userId,
    resetToken,
    country,
    language,
    questionId,
    success,
    failure
  );

  return reactRender(req, res, routeState);
};

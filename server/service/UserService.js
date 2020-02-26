import { UserApiService } from 'Shared/api/UserApiService';
import { defaultUnexpectedError } from 'Shared/services/DefaultErrorHandler';
import { logger } from '../logger';

const verifyUser = async (
  userId: string,
  verificationToken: string,
  country: string,
  language: string,
  questionId?: string,
  success?: () => void = () => {},
  failure?: () => void = () => {}
): Promise<void> => {
  try {
    await UserApiService.verifyUser(userId, verificationToken, {
      'x-make-question-id': questionId || '',
      'x-make-country': country,
      'x-make-language': language,
    });

    success();
  } catch (apiServiceError) {
    if ([400, 404].includes(apiServiceError.status)) {
      failure();
      logger.warn(
        `Error in verifyUser for userId ->${userId}, verificationToken -> ${verificationToken} : ${
          apiServiceError.message
        }`
      );
      return;
    }
    failure();
    defaultUnexpectedError(apiServiceError);
  }
};

const resetPasswordTokenCheck = async (
  userId: string,
  resetToken: string,
  country: string,
  language: string,
  questionId?: string,
  success?: () => void = () => {},
  failure?: () => void = () => {}
): Promise<void> => {
  try {
    await UserApiService.resetPasswordTokenCheck(userId, resetToken, {
      'x-make-question-id': questionId || '',
      'x-make-country': country,
      'x-make-language': language,
    });
    success();
  } catch (apiServiceError) {
    if ([400, 404].includes(apiServiceError.status)) {
      failure();
      logger.warn(
        `Error in resetPasswordTokenCheck for userId -> ${userId} : status -> ${
          apiServiceError.message
        }`
      );
      return;
    }
    failure();
    defaultUnexpectedError(apiServiceError);
  }
};

export const UserService = {
  verifyUser,
  resetPasswordTokenCheck,
};

/* @flow */
import { UserService } from 'Shared/api/UserService';
import { type UserInformationForm, type Passwords } from 'Shared/types/user';
import { getDateOfBirthFromAge } from 'Shared/helpers/date';
import * as HttpStatus from 'Shared/constants/httpStatus';
import { Logger } from 'Shared/services/Logger';
import { type UserObject, type ErrorObject } from 'Shared/types/form';

export const update = async (userInformation: UserInformationForm) => {
  return UserService.update({
    firstName: userInformation.firstName,
    dateOfBirth: getDateOfBirthFromAge(userInformation.age),
    postalCode: userInformation.postalCode,
    profession: userInformation.profession,
    description: userInformation.description,
    optInNewsletter: userInformation.optInNewsletter,
  });
};

export const updateNewsletter = async (optInNewsletter: boolean) => {
  return UserService.update({
    optInNewsletter,
  });
};

export const updatePassword = async (
  userId: string,
  passwords: Passwords,
  hasPassword: boolean
) => {
  const actualPassword =
    hasPassword && passwords.actualPassword
      ? passwords.actualPassword
      : undefined;
  const { newPassword } = passwords;

  return UserService.updatePassword(userId, actualPassword, newPassword);
};

export const deleteAccount = async (userId: string, password: string) => {
  return UserService.deleteAccount(userId, password)
    .then(() => HttpStatus.HTTP_NO_CONTENT)
    .catch(error => {
      Logger.logError(
        `Error in deleting account for userId -> ${userId} : status -> ${error}`
      );

      throw error;
    });
};

export const forgotPassword = (email: string) => {
  return UserService.forgotPassword(email)
    .then(() => {})
    .catch(errors => {
      const notExistError: ErrorObject = {
        field: 'email',
        message: 'login.email_doesnot_exist',
      };
      const unexpectedError: ErrorObject = {
        field: 'global',
        message: 'common.form.api_error',
      };

      switch (true) {
        case errors === 404:
          throw Array(notExistError);
        case !Array.isArray(errors):
          throw Array(unexpectedError);
        default:
          throw errors;
      }
    });
};

const getMessageFromApiErrorMessage = (message: string): string => {
  if (/Email\s(.+)\salready exist/.test(message)) {
    return 'email_already_exist';
  }

  return message;
};

export const register = (user: UserObject) => {
  return UserService.register(user)
    .then(() => {})
    .catch(errors => {
      const errorList = Array.isArray(errors)
        ? errors.map(error => ({
            ...error,
            message: `common.form.${getMessageFromApiErrorMessage(
              error.message
            )}`,
          }))
        : [{ field: 'global', message: 'common.form.api_error' }];

      throw errorList;
    });
};

export const login = (email: string, password: string) => {
  return UserService.login(email, password)
    .then(() => {})
    .catch(() => {
      const error = {
        field: 'email',
        message: 'login.email_doesnot_exist',
      };

      throw error;
    });
};

/* @flow */
import { UserService } from 'Shared/api/UserService';
import { type UserInformationForm, type Passwords } from 'Shared/types/user';
import { getDateOfBirthFromAge } from 'Shared/helpers/date';
import * as HttpStatus from 'Shared/constants/httpStatus';
import { Logger } from 'Shared/services/Logger';

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

export const deleteAccount = async (password: string, userId: string) => {
  return UserService.deleteAccount(password, userId)
    .then(() => HttpStatus.HTTP_NO_CONTENT)
    .catch(error => {
      Logger.logError(
        `Error in deleting account for userId -> ${userId} : status -> ${error}`
      );

      throw error;
    });
};

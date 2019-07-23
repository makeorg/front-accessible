// @flow
import { UserApiService } from 'Shared/api/UserApiService';
import { type UserInformationForm, type Passwords } from 'Shared/types/user';
import { getDateOfBirthFromAge } from 'Shared/helpers/date';
import * as HttpStatus from 'Shared/constants/httpStatus';
import { Logger } from 'Shared/services/Logger';
import { mapErrors } from 'Shared/services/ApiErrors';
import { type TypeRegisterFormData } from 'Shared/types/form';
import {
  type TypeErrorObject,
  type ErrorMapping as TypeErrorMapping,
} from 'Shared/types/api';

import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { i18n } from 'Shared/i18n';

export const update = async (userInformation: UserInformationForm) => {
  return UserApiService.update({
    firstName: userInformation.firstName,
    dateOfBirth: getDateOfBirthFromAge(userInformation.age),
    postalCode: userInformation.postalCode,
    profession: userInformation.profession,
    description: userInformation.description,
    optInNewsletter: userInformation.optInNewsletter,
  });
};

export const updateNewsletter = async (optInNewsletter: boolean) => {
  return UserApiService.update({
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

  return UserApiService.updatePassword(userId, actualPassword, newPassword);
};

export const deleteAccount = async (userId: string, password: string) => {
  return UserApiService.deleteAccount(userId, password)
    .then(() => HttpStatus.HTTP_NO_CONTENT)
    .catch(error => {
      Logger.logError(
        `Error in deleting account for userId -> ${userId} : status -> ${error}`
      );

      throw error;
    });
};

export const forgotPassword = (email: string) => {
  return UserApiService.forgotPassword(email)
    .then(() => {})
    .catch(errors => {
      const errorMessageMapping: TypeErrorMapping[] = [
        {
          field: 'email',
          apiMessage: 'email is not a valid email',
          message: 'common.form.email_is_not_a_valid_email',
        },
      ];
      const notExistError: TypeErrorObject = {
        field: 'email',
        message: 'forgot_password.email_doesnot_exist',
      };
      const unexpectedError: TypeErrorObject = {
        field: 'global',
        message: 'common.form.api_error',
      };

      switch (true) {
        case errors === 404:
          throw Array(notExistError);
        case !Array.isArray(errors):
          Logger.logError(`Unexpected error (array expected): ${errors}`);
          throw Array(unexpectedError);
        default:
          throw mapErrors(errorMessageMapping, errors);
      }
    });
};

export const register = (user: TypeRegisterFormData) => {
  return UserApiService.register(user)
    .then(() => {})
    .catch(errors => {
      const errorsMapping: TypeErrorMapping[] = [
        {
          field: 'email',
          apiMessage: /Email\s(.+)\salready exist/,
          message: i18n.t('common.form.email_already_exist'),
        },
        {
          field: 'email',
          apiMessage: 'Email is not a valid email',
          message: i18n.t('common.form.email_is_not_a_valid_email'),
        },
        {
          field: 'password',
          apiMessage: 'Password must be at least 8 characters',
          message: i18n.t('common.form.password_must_be_at_least_8_characters'),
        },
        {
          field: 'firstname',
          apiMessage: 'FirstName is mandatory',
          message: i18n.t('common.form.firstname_is_mandatory'),
        },
        {
          field: 'dateofbirth',
          apiMessage: 'Invalid date: age must be between 13 and 120"',
          message: i18n.t(
            'common.form.invalid_date_age_must_be_between_13_and_120'
          ),
        },
      ];

      const unexpectedError: TypeErrorObject = {
        field: 'global',
        message: 'common.form.api_error',
      };

      switch (true) {
        case !Array.isArray(errors):
          Logger.logError(`Unexpected error (array expected): ${errors}`);
          throw Array(unexpectedError);
        default:
          throw mapErrors(errorsMapping, errors);
      }
    });
};

export const login = (email: string, password: string) => {
  return UserApiService.login(email, password)
    .then(() => {})
    .catch(() => {
      const error = {
        field: 'email',
        message: 'login.email_doesnot_exist',
      };

      throw error;
    });
};

export const myProposals = async (userId: string): Promise<TypeProposal[]> => {
  const { results } = await UserApiService.myProposals(userId);

  return results;
};

export const myFavourites = async (userId: string): Promise<TypeProposal[]> => {
  const { results } = await UserApiService.myFavourites(userId);

  return results;
};

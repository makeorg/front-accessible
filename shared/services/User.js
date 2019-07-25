// @flow
import { UserApiService } from 'Shared/api/UserApiService';
import {
  type TypeUserInformationForm,
  type Passwords,
} from 'Shared/types/user';
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

export const update = async (userInformation: TypeUserInformationForm) => {
  return UserApiService.update({
    firstName: userInformation.firstName,
    dateOfBirth: getDateOfBirthFromAge(userInformation.age),
    postalCode: userInformation.postalCode,
    profession: userInformation.profession,
    description: userInformation.description,
    optInNewsletter: userInformation.optInNewsletter,
  })
    .then(() => {})
    .catch(errors => {
      const errorsMapping: TypeErrorMapping[] = [
        {
          field: 'firstname',
          apiMessage: 'FirstName should not be an empty string',
          message: i18n.t(
            'common.form.firstname_should_not_be_an_empty_string'
          ),
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
        message: i18n.t('common.form.api_error'),
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

  return UserApiService.updatePassword(userId, actualPassword, newPassword)
    .then(() => {})
    .catch(errors => {
      const errorsMapping: TypeErrorMapping[] = [
        {
          field: 'newPassword',
          apiMessage: 'Password must be at least 8 characters',
          message: i18n.t('common.form.password_must_be_at_least_8_characters'),
        },
      ];

      const unexpectedError: TypeErrorObject = {
        field: 'global',
        message: i18n.t('common.form.api_error'),
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
      const errorsMapping: TypeErrorMapping[] = [
        {
          field: 'email',
          apiMessage: 'Email is not a valid email',
          message: i18n.t('common.form.email_is_not_a_valid_email', {
            label: `<label for="email">${i18n.t(
              'common.form.email_label'
            )}</label>`,
          }),
        },
        {
          field: 'email',
          apiMessage: 'Error: 404',
          message: i18n.t('common.form.email_doesnot_exist', {
            label: `<label for="email">${i18n.t(
              'common.form.email_label'
            )}</label>`,
          }),
        },
      ];
      const notExistError: TypeErrorObject = {
        field: 'email',
        message: i18n.t('common.form.email_doesnot_exist', {
          label: `<label for="email">${i18n.t(
            'common.form.email_label'
          )}</label>`,
        }),
      };
      const unexpectedError: TypeErrorObject = {
        field: 'global',
        message: i18n.t('common.form.api_error'),
      };

      switch (true) {
        case errors.toString() === 'Error: 404':
          throw Array(notExistError);
        case !Array.isArray(errors):
          Logger.logError(`Unexpected error (array expected): ${errors}`);
          throw Array(unexpectedError);
        default:
          throw mapErrors(errorsMapping, errors);
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
          message: i18n.t('common.form.email_already_exist', {
            label: `<label for="email">${i18n.t(
              'common.form.email_label'
            )}</label>`,
          }),
        },
        {
          field: 'email',
          apiMessage: 'Email is not a valid email',
          message: i18n.t('common.form.email_is_not_a_valid_email', {
            label: `<label for="email">${i18n.t(
              'common.form.email_label'
            )}</label>`,
          }),
        },
        {
          field: 'password',
          apiMessage: 'Password must be at least 8 characters',
          message: i18n.t(
            'common.form.password_must_be_at_least_8_characters',
            {
              label: `<label for="password">${i18n.t(
                'common.form.password_label'
              )}</label>`,
            }
          ),
        },
        {
          field: 'firstname',
          apiMessage: 'FirstName is mandatory',
          message: i18n.t('common.form.firstname_is_mandatory', {
            label: `<label for="firstname">${i18n.t(
              'common.form.firstname_label'
            )}</label>`,
          }),
        },
        {
          field: 'dateofbirth',
          apiMessage: 'Invalid date: age must be between 13 and 120"',
          message: i18n.t(
            'common.form.invalid_date_age_must_be_between_13_and_120',
            {
              label: `<label for="age">${i18n.t(
                'common.form.age_label'
              )}</label>`,
            }
          ),
        },
      ];

      const unexpectedError: TypeErrorObject = {
        field: 'global',
        message: i18n.t('common.form.api_error'),
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
        message: i18n.t('common.form.email_doesnot_exist', {
          label: `<label for="email">${i18n.t(
            'common.form.email_label'
          )}</label>`,
        }),
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

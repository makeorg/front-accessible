// @flow
import { UserApiService } from 'Shared/api/UserApiService';
import { type UserInformationForm, type Passwords } from 'Shared/types/user';
import { getDateOfBirthFromAge } from 'Shared/helpers/date';
import * as HttpStatus from 'Shared/constants/httpStatus';
import { Logger } from 'Shared/services/Logger';
import * as ProposalService from 'Shared/services/Proposal';
import { type UserObject, type ErrorObject } from 'Shared/types/form';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';

/**
 * Map errors from API to internal error message
 *
 * @param {Object}        errorMessageMapping an array of error map object {field: 'value', apiMessage: 'message from API', message: 'internal error key message'}
 *                                            apiMessage can be a RegExp or a string
 * @param {ErrorObject[]} errors              an array of ErrorObject
 */
const mapErrors = (errorMessageMapping, errors: ErrorObject[]) => {
  const fieldMatch = (fieldApi, fieldMap) => {
    return fieldMap === 'any' || fieldApi === fieldMap;
  };
  const messageMatch = (messageApi, messageMap) => {
    if (messageMap instanceof RegExp) {
      return messageMap.test(messageApi);
    }
    return messageMap === messageApi;
  };

  const errorsMapped = errors.map(apiError => {
    const errorMatch = errorMessageMapping.find(
      errorFromMapping =>
        fieldMatch(apiError.field, errorFromMapping.field) &&
        messageMatch(apiError.message, errorFromMapping.apiMessage)
    );

    if (typeof errorMatch !== 'undefined') {
      return {
        field: `${apiError.field}`,
        message: `${errorMatch.message}`,
      };
    }
    Logger.logError(
      `Unexpected error: "${apiError.field}":"${apiError.message}"`
    );
    return {
      field: 'global',
      message: 'common.form.api_error',
    };
  });

  return errorsMapped;
};

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
      const errorMessageMapping = [
        {
          field: 'email',
          apiMessage: 'email is not a valid email',
          message: 'common.form.email is not a valid email',
        },
      ];
      const notExistError: ErrorObject = {
        field: 'email',
        message: 'forgot_password.email_doesnot_exist',
      };
      const unexpectedError: ErrorObject = {
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

export const register = (user: UserObject) => {
  return UserApiService.register(user)
    .then(() => {})
    .catch(errors => {
      const errorMessageMapping = [
        {
          field: 'email',
          apiMessage: /Email\s(.+)\salready exist/,
          message: 'common.form.email_already_exist',
        },
        {
          field: 'password',
          apiMessage: 'Password must be at least 8 characters',
          message: 'common.form.Password must be at least 8 characters',
        },
        {
          field: 'any',
          apiMessage: 'required_field',
          message: 'common.form.required_field',
        },
      ];

      const unexpectedError: ErrorObject = {
        field: 'global',
        message: 'common.form.api_error',
      };

      switch (true) {
        case !Array.isArray(errors):
          Logger.logError(`Unexpected error (array expected): ${errors}`);
          throw Array(unexpectedError);
        default:
          throw mapErrors(errorMessageMapping, errors);
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
  const proposals = await ProposalService.enrichProposalsWithQuestion(results);

  return proposals;
};

export const myFavourites = async (userId: string): Promise<TypeProposal[]> => {
  const { results } = await UserApiService.myFavourites(userId);
  const proposals = await ProposalService.enrichProposalsWithQuestion(results);

  return proposals;
};

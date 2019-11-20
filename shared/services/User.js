// @flow
import { UserApiService } from 'Shared/api/UserApiService';
import {
  type TypeUserInformationForm,
  type TypePasswords,
} from 'Shared/types/user';
import { type ApiSearchProposalsResponseType } from 'Shared/types/api';
import { getDateOfBirthFromAge } from 'Shared/helpers/date';
import * as HttpStatus from 'Shared/constants/httpStatus';
import { Logger } from 'Shared/services/Logger';
import { mapErrors } from 'Shared/services/ApiErrors';
import { type TypeRegisterFormData } from 'Shared/types/form';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import {
  loginErrors,
  registerErrors,
  updateUserErrors,
  updatePasswordErrors,
  forgotPasswordErrors,
  emailNotExistError,
} from 'Shared/errors/Messages/User';
import { defaultApiError } from 'Shared/errors/Messages';
import { getErrorMessages } from 'Shared/helpers/form';
import { PROPOSALS_LISTING_LIMIT } from 'Shared/constants/proposal';

export const update = async (userInformation: TypeUserInformationForm) => {
  return UserApiService.update({
    firstName: userInformation.firstName,
    dateOfBirth: getDateOfBirthFromAge(userInformation.age),
    postalCode: userInformation.postalCode,
    profession: userInformation.profession,
    description: userInformation.description,
    optInNewsletter: userInformation.optInNewsletter,
  })
    .then(() => HttpStatus.HTTP_NO_CONTENT)
    .catch(errors => {
      getErrorMessages(updateUserErrors, errors);
    });
};

export const updateNewsletter = async (optInNewsletter: boolean) => {
  return UserApiService.update({
    optInNewsletter,
  })
    .then(() => HttpStatus.HTTP_NO_CONTENT)
    .catch(errors => {
      throw errors;
    });
};

export const updatePassword = async (
  userId: string,
  passwords: TypePasswords,
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
      getErrorMessages(updatePasswordErrors, errors);
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
      switch (true) {
        case errors.toString() === 'Error: 404':
          throw Array(emailNotExistError);
        case !Array.isArray(errors):
          Logger.logError(`Unexpected error (array expected): ${errors}`);
          throw Array(defaultApiError);
        default:
          throw mapErrors(forgotPasswordErrors, errors);
      }
    });
};

export const register = (user: TypeRegisterFormData) => {
  return UserApiService.register(user)
    .then(() => {})
    .catch(errors => {
      getErrorMessages(registerErrors, errors);
    });
};

export const login = (email: string, password: string) => {
  return UserApiService.login(email, password)
    .then(() => {})
    .catch(() => {
      throw loginErrors;
    });
};

export const myProposals = async (
  userId: string,
  seed: ?number = null,
  page: number = 0
): Promise<ApiSearchProposalsResponseType> => {
  const limit = PROPOSALS_LISTING_LIMIT;
  const skip = page * limit;

  const response = await UserApiService.myProposals(userId, seed, limit, skip);

  return response;
};

export const myFavourites = async (userId: string): Promise<TypeProposal[]> => {
  const { results } = await UserApiService.myFavourites(userId);

  return results;
};

// @flow
import { UserApiService } from 'Shared/api/UserApiService';
import {
  type UserInformationFormType,
  type SearchProposalsType,
  type PasswordsType,
  type UserAuthType,
  type UserType,
} from 'Shared/types/user';
import { getDateOfBirthFromAge } from 'Shared/helpers/date';
import { mapErrors } from 'Shared/services/ApiErrors';
import { type RegisterFormDataType } from 'Shared/types/form';
import {
  loginErrors,
  registerErrors,
  updateUserErrors,
  updatePasswordErrors,
  forgotPasswordErrors,
  emailNotExistError,
} from 'Shared/errors/Messages/User';
import { getErrorMessages } from 'Shared/helpers/form';
import { PROPOSALS_LISTING_LIMIT } from 'Shared/constants/proposal';
import { type ErrorObjectType } from 'Shared/types/api';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const update = (
  userInformation: UserInformationFormType,
  success: () => void,
  handleErrors: (errors: ErrorObjectType[]) => void
): void => {
  UserApiService.update({
    firstName: userInformation.firstName,
    lastName: userInformation.lastName,
    organisationName: userInformation.organisationName,
    dateOfBirth: getDateOfBirthFromAge(userInformation.age),
    postalCode: userInformation.postalCode,
    profession: userInformation.profession,
    description: userInformation.description,
    optInNewsletter: userInformation.optInNewsletter,
    website: userInformation.website,
  })
    .then(success)
    .catch(apiServiceError => {
      if (apiServiceError.status === 400) {
        handleErrors(getErrorMessages(updateUserErrors, apiServiceError.data));
        return;
      }
      defaultUnexpectedError(apiServiceError);
    });
};

const updateNewsletter = (
  optInNewsletter: boolean,
  success: () => void,
  onErrors: () => void
): void => {
  UserApiService.update({ optInNewsletter })
    .then(success)
    .catch(apiServiceError => {
      if (apiServiceError.status === 400) {
        onErrors();
        return;
      }
      defaultUnexpectedError(apiServiceError);
    });
};

const updatePassword = (
  userId: string,
  passwords: PasswordsType,
  hasPassword: boolean,
  success: () => void,
  handleErrors: (errors: ErrorObjectType[]) => void
): void => {
  const actualPassword =
    hasPassword && passwords.actualPassword
      ? passwords.actualPassword
      : undefined;
  const { newPassword } = passwords;

  UserApiService.updatePassword(userId, actualPassword, newPassword)
    .then(success)
    .catch(apiServiceError => {
      if (apiServiceError.status === 400 && apiServiceError.data) {
        handleErrors(
          getErrorMessages(updatePasswordErrors, apiServiceError.data)
        );
        return;
      }
      defaultUnexpectedError(apiServiceError);
    });
};

const deleteAccount = (
  userId: string,
  password: string,
  success: () => void = () => {},
  invalidPassword: () => void,
  invalidEmail: () => void
): void => {
  const INVALID_PASSWORD_KEY_ERROR = 'invalid_password';
  const INVALID_EMAIL_KEY_ERROR = 'invalid_email';

  UserApiService.deleteAccount(userId, password)
    .then(success)
    .catch(apiServiceError => {
      if (
        apiServiceError.status === 400 &&
        apiServiceError.data &&
        apiServiceError.data.shift().key === INVALID_PASSWORD_KEY_ERROR
      ) {
        invalidPassword();
        return;
      }
      if (
        apiServiceError.status === 400 &&
        apiServiceError.data &&
        apiServiceError.data.shift().key === INVALID_EMAIL_KEY_ERROR
      ) {
        invalidEmail();
        return;
      }
      defaultUnexpectedError(apiServiceError);
    });
};

const forgotPassword = (
  email: string,
  success: () => void,
  errors: (errors: ErrorObjectType[]) => void
): void => {
  UserApiService.forgotPassword(email)
    .then(success)
    .catch(apiServiceError => {
      if (apiServiceError.status === 404) {
        errors(Array(emailNotExistError));
        return;
      }
      if (apiServiceError.status === 400) {
        errors(mapErrors(forgotPasswordErrors, apiServiceError.data));
        return;
      }
      defaultUnexpectedError(apiServiceError);
    });
};

const register = (
  user: RegisterFormDataType,
  success: () => void,
  errors: (errors: ErrorObjectType[]) => void,
  unexpectedError: () => void = () => {}
): void => {
  UserApiService.register(user)
    .then(success)
    .catch(apiServiceError => {
      if (apiServiceError.status === 400) {
        errors(getErrorMessages(registerErrors, apiServiceError.data));
        return;
      }
      defaultUnexpectedError(apiServiceError);
      unexpectedError();
    });
};

const login = (
  email: string,
  password: string,
  success?: () => void = () => {},
  errors?: (errors: ErrorObjectType[]) => void = () => {},
  unexpectedError?: () => void = () => {}
): void => {
  UserApiService.login(email, password)
    .then(success)
    .catch(apiServiceError => {
      if ([400, 401, 403, 404].includes(apiServiceError.status)) {
        errors(loginErrors);
        return;
      }
      defaultUnexpectedError(apiServiceError);
      unexpectedError();
    });
};

const myProposals = async (
  userId: string,
  seed: ?number = null,
  page: number = 0
): Promise<?SearchProposalsType> => {
  const limit = PROPOSALS_LISTING_LIMIT;
  const skip = page * limit;
  try {
    const response = await UserApiService.myProposals(
      userId,
      seed,
      limit,
      skip
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const myFavourites = async (
  userId: string,
  page: number = 0
): Promise<?SearchProposalsType> => {
  const limit = PROPOSALS_LISTING_LIMIT;
  const skip = page * limit;
  try {
    const response = await UserApiService.myFavourites(userId, limit, skip);

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const logout = async (success?: () => void = () => {}): Promise<void> => {
  try {
    await UserApiService.logout();
    success();
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);
  }
};

const loginSocial = async (
  provider: string,
  token: string,
  success?: () => void = () => {},
  failure?: () => void = () => {}
): Promise<?UserAuthType> => {
  try {
    const response = await UserApiService.loginSocial(provider, token);
    success();

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);
    failure();

    return null;
  }
};

const changePassword = async (
  newPassword: string,
  resetToken: string,
  userId: string,
  success?: () => void = () => {},
  failure?: () => void = () => {}
): Promise<void> => {
  try {
    await UserApiService.changePassword(newPassword, resetToken, userId);
    success();

    return;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);
    failure();
  }
};

const me = async (unauthorized?: () => void = () => {}): Promise<UserType> => {
  try {
    const response = await UserApiService.me();

    return response.data;
  } catch (apiServiceError) {
    if (apiServiceError.status === 401) {
      unauthorized();

      return null;
    }
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

export const UserService = {
  update,
  updateNewsletter,
  updatePassword,
  deleteAccount,
  forgotPassword,
  register,
  login,
  myProposals,
  myFavourites,
  logout,
  loginSocial,
  changePassword,
  me,
};

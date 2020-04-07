// @flow
import { UserApiService } from 'Shared/api/UserApiService';
import {
  type SearchProposalsType,
  type PasswordsType,
  type UserAuthType,
  type UserType,
  type UserProfileType,
} from 'Shared/types/user';
import { type OrganisationProfileType } from 'Shared/types/organisation';
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
import { TYPE_ORGANISATION, TYPE_PERSONALITY } from 'Shared/constants/user';
import { defaultUnexpectedError } from './DefaultErrorHandler';
import { OrganisationService } from './Organisation';
import { PersonalityService } from './Personality';

const updatePassword = async (
  userId: string,
  passwords: PasswordsType,
  hasPassword: boolean,
  success: () => void,
  handleErrors: (errors: ErrorObjectType[]) => void
): Promise<void> => {
  const actualPassword =
    hasPassword && passwords.actualPassword
      ? passwords.actualPassword
      : undefined;
  const { newPassword } = passwords;

  try {
    await UserApiService.updatePassword(userId, actualPassword, newPassword);
    success();
  } catch (apiServiceError) {
    if (apiServiceError.status === 400 && apiServiceError.data) {
      handleErrors(
        getErrorMessages(updatePasswordErrors, apiServiceError.data)
      );
      return;
    }
    defaultUnexpectedError(apiServiceError);
  }
};

const deleteAccount = async (
  userId: string,
  password: string,
  success: () => void = () => {},
  invalidPassword: () => void,
  invalidEmail: () => void
): Promise<void> => {
  const INVALID_PASSWORD_KEY_ERROR = 'invalid_password';
  const INVALID_EMAIL_KEY_ERROR = 'invalid_email';

  try {
    await UserApiService.deleteAccount(userId, password);
    success();
  } catch (apiServiceError) {
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
  }
};

const forgotPassword = async (
  email: string,
  success: () => void,
  errors: (errors: ErrorObjectType[]) => void
): Promise<void> => {
  try {
    await UserApiService.forgotPassword(email);
    success();
  } catch (apiServiceError) {
    if (apiServiceError.status === 404) {
      errors(Array(emailNotExistError));
      return;
    }
    if (apiServiceError.status === 400) {
      errors(mapErrors(forgotPasswordErrors, apiServiceError.data));
      return;
    }
    defaultUnexpectedError(apiServiceError);
  }
};

const register = async (
  user: RegisterFormDataType,
  success: () => void,
  errors: (errors: ErrorObjectType[]) => void,
  unexpectedError: () => void = () => {}
): Promise<void> => {
  try {
    await UserApiService.register(user);
    success();
  } catch (apiServiceError) {
    if (apiServiceError.status === 400) {
      errors(getErrorMessages(registerErrors, apiServiceError.data));
      return;
    }
    defaultUnexpectedError(apiServiceError);
    unexpectedError();
  }
};

const login = async (
  email: string,
  password: string,
  success?: () => void = () => {},
  errors?: (errors: ErrorObjectType[]) => void = () => {},
  unexpectedError?: () => void = () => {}
): Promise<void> => {
  try {
    await UserApiService.login(email, password);
    success();
  } catch (apiServiceError) {
    if ([400, 401, 403, 404].includes(apiServiceError.status)) {
      errors(loginErrors);
      return;
    }
    defaultUnexpectedError(apiServiceError);
    unexpectedError();
  }
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

const current = async (
  unauthorized?: () => void = () => {}
): Promise<UserType | null> => {
  try {
    const response = await UserApiService.current();

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

const getProfile = async (userId: string): Promise<UserProfileType | null> => {
  try {
    const response = await UserApiService.getProfile(userId);

    return response.data;
  } catch (apiServiceError) {
    if (apiServiceError.status === 401) {
      return null;
    }
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getProfileByUserType = async (
  userId: string,
  userType: string
): UserProfileType | OrganisationProfileType => {
  if (userType === TYPE_ORGANISATION) {
    return OrganisationService.getProfile(userId);
  }
  if (userType === TYPE_PERSONALITY) {
    return PersonalityService.getProfile(userId);
  }

  return getProfile(userId);
};

const update = async (
  userId: string,
  profile: UserProfileType,
  success: () => void,
  handleErrors: (errors: ErrorObjectType[]) => void
): Promise<void> => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    postalCode,
    profession,
    description,
    optInNewsletter,
    website,
    avatarUrl,
  } = profile;

  try {
    await UserApiService.update(
      userId,
      firstName,
      lastName,
      dateOfBirth,
      avatarUrl,
      profession,
      description,
      postalCode,
      optInNewsletter,
      website
    );

    success();
  } catch (apiServiceError) {
    if (apiServiceError.status === 400) {
      handleErrors(getErrorMessages(updateUserErrors, apiServiceError.data));
      return;
    }

    defaultUnexpectedError(apiServiceError);
  }
};

export const UserService = {
  update,
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
  current,
  getProfileByUserType,
};

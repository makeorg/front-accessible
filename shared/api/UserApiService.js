// @flow
import { getDateOfBirthFromAge } from 'Shared/helpers/date';
import { Logger } from 'Shared/services/Logger';
import * as HttpStatus from 'Shared/constants/httpStatus';
import {
  type ApiServiceHeaders,
  type ApiSearchProposalsResponseType,
} from 'Shared/types/api';
import { ApiService } from './ApiService';

export const PATH_USER_ME = '/user/me';
export const PATH_USER_LOGIN = '/oauth/make_access_token';
export const PATH_USER_GET_TOKEN = '/oauth/access_token';
export const PATH_USER_LOGOUT = '/logout';
export const PATH_USER_LOGIN_SOCIAL = '/user/login/social';
export const PATH_USER = '/user';
export const PATH_USER_FORGOT_PASSWORD = '/user/reset-password/request-reset';
export const PATH_USER_VERIFICATION =
  '/user/:userId/validate/:verificationToken';
export const PATH_USER_RESET_TOKEN_CHECK =
  '/user/reset-password/check-validity/:userId/:resetToken';
export const PATH_USER_CHANGE_PASSWORD =
  '/user/reset-password/change-password/:userId';
export const PATH_USER_UPDATE_PASSWORD = '/user/:userId/change-password';
export const PATH_USER_DELETE_ACCOUNT = '/user/:userId/delete';
export const PATH_USER_PROPOSALS = '/user/:userId/proposals';
export const PATH_USER_FAVOURITES = '/user/:userId/votes';

export const FACEBOOK_PROVIDER_ENUM = 'facebook';
export const GOOGLE_PROVIDER_ENUM = 'google';

export class UserApiService {
  /**
   * Get user info
   * @return {Promise}
   */
  static me(): Promise<Object> {
    return ApiService.callApi(PATH_USER_ME, {
      method: 'GET',
    });
  }

  /**
   * Get user token
   * @return {Promise}
   */
  static getUserToken(): Promise<Object> {
    return ApiService.callApi(PATH_USER_GET_TOKEN, {
      method: 'GET',
    });
  }

  /**
   * Login the user
   * @param  {String} email
   * @param  {String} password
   * @return {Promise}
   */
  static login(email: string, password: string): Promise<Object> {
    const data = {
      username: email,
      password,
      grant_type: 'password',
    };

    return ApiService.callApi(PATH_USER_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&'),
    });
  }

  /**
   * Logout the user
   *
   * @return {Promise}
   */
  static logout(): Promise<Object> {
    return ApiService.callApi(PATH_USER_LOGOUT, {
      method: 'POST',
    });
  }

  /**
   * Login the user vi a social account
   * @param  {String} provider login scoial type (google, facebook..)
   * @param  {String} token
   * @return {Promise}
   */
  static loginSocial(provider: string, token: string): Promise<Object> {
    return ApiService.callApi(PATH_USER_LOGIN_SOCIAL, {
      method: 'POST',
      body: JSON.stringify({
        provider,
        token,
        country: ApiService.country,
        language: ApiService.language,
      }),
    });
  }

  /**
   * Register a user
   * @param  {Object}  user
   * @return {Promise}
   */
  static register(user: Object): Promise<Object> {
    const dateOfBirth = getDateOfBirthFromAge(user.age);
    return ApiService.callApi(PATH_USER, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        firstName: user.firstname,
        dateOfBirth: dateOfBirth !== '' ? dateOfBirth : null,
        postalCode: user.postalcode,
        profession: user.profession,
        country: ApiService.country,
        language: ApiService.language,
        questionId: ApiService.questionId,
      }),
    });
  }

  /**
   * Update a user
   * @param  {Object}  userInformation
   * @return {Promise}
   */
  static update({
    firstName,
    dateOfBirth,
    postalCode,
    profession,
    description,
    optInNewsletter,
  }: Object): Promise<void> {
    return ApiService.callApi(PATH_USER, {
      method: 'PATCH',
      body: JSON.stringify({
        firstName,
        dateOfBirth,
        postalCode,
        profession,
        description,
        optInNewsletter,
      }),
    });
  }

  /**
   * Update the password
   * @param  {String}  userId
   * @param  {String}  actualPassword
   * @param  {String}  newPassword
   * @return {Promise}
   */
  static updatePassword(
    userId: string,
    actualPassword?: string,
    newPassword: string
  ): Promise<any> {
    return ApiService.callApi(
      PATH_USER_UPDATE_PASSWORD.replace(':userId', userId),
      {
        method: 'POST',
        body: JSON.stringify({ actualPassword, newPassword }),
      }
    );
  }

  /**
   * Request a forgot password link
   * @param  {String}  email
   * @return {Promise}
   */
  static forgotPassword(email: string): Promise<Object> {
    return ApiService.callApi(PATH_USER_FORGOT_PASSWORD, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  /**
   * Request a verification user
   * @param  {String}  userId
   * @param  {String}  verificationToken
   * @return {Promise}
   */
  static verifyUser(
    userId: string,
    verificationToken: string,
    headers: ApiServiceHeaders = {}
  ): Promise<Object> {
    const newPath = PATH_USER_VERIFICATION.replace(':userId', userId).replace(
      ':verificationToken',
      verificationToken
    );

    return ApiService.callApi(newPath, {
      method: 'POST',
      headers,
    })
      .then(() => HttpStatus.HTTP_NO_CONTENT)
      .catch(error => {
        Logger.logError(`Error in verifyUser for 
      userId ->${userId}, verificationToken -> ${verificationToken} : ${error}`);
        return error;
      });
  }

  /*
   * Check forgot password token validity
   * @param  {String}  userId
   * @param  {String}  resetToken
   * @return {Promise}
   */
  static resetPasswordTokenCheck(
    userId: string,
    resetToken: string,
    headers: ApiServiceHeaders
  ): Promise<Object> {
    return ApiService.callApi(
      PATH_USER_RESET_TOKEN_CHECK.replace(':userId', userId).replace(
        ':resetToken',
        resetToken
      ),
      {
        method: 'POST',
        headers,
      }
    )
      .then(() => HttpStatus.HTTP_NO_CONTENT)
      .catch(error => {
        Logger.logError(
          `Error in resetPasswordTokenCheck for userId -> ${userId} : status -> ${error}`
        );

        return error;
      });
  }

  /**
   * change password
   * @param  {String}  userId
   * @param  {String}  resetToken
   */
  static changePassword(
    newPassword: string,
    resetToken: string,
    userId: string
  ): Promise<Object> {
    return ApiService.callApi(
      PATH_USER_CHANGE_PASSWORD.replace(':userId', userId),
      {
        method: 'POST',
        body: JSON.stringify({ password: newPassword, resetToken }),
      }
    )
      .then(() => HttpStatus.HTTP_NO_CONTENT)
      .catch(error => {
        Logger.logError(
          `Error in resetPasswordTokenCheck for userId -> ${userId} : status -> ${error}`
        );

        return error;
      });
  }

  /**
   * delete account
   * @param  {String}  password
   * @param  {String}  userId
   */
  static deleteAccount(userId: string, password?: string): Promise<any> {
    return ApiService.callApi(
      PATH_USER_DELETE_ACCOUNT.replace(':userId', userId),
      {
        method: 'POST',
        body: JSON.stringify({ password }),
      }
    );
  }

  /**
   * get user proposals
   * @param  {String}  userId
   */
  static myProposals(userId: string): Promise<ApiSearchProposalsResponseType> {
    return ApiService.callApi(PATH_USER_PROPOSALS.replace(':userId', userId), {
      method: 'GET',
      params: { sort: 'createdAt', order: 'desc' },
    });
  }

  /**
   * get favorites user proposals
   * @param  {String}  userId
   */
  static myFavourites(userId: string): Promise<ApiSearchProposalsResponseType> {
    return ApiService.callApi(PATH_USER_FAVOURITES.replace(':userId', userId), {
      method: 'GET',
      params: { qualifications: 'likeIt' },
    });
  }
}
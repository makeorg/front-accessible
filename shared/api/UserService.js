/* @flow */
import { getDateOfBirthFromAge } from 'Shared/helpers/date';
import { Logger } from 'Shared/services/Logger';
import * as HttpStatus from 'Shared/constants/httpStatus';
import { type ApiServiceHeaders } from './type';
import { ApiService } from './ApiService';

const PATH_USER_ME = '/user/me';
const PATH_USER_LOGIN = '/oauth/make_access_token';
const PATH_USER_GET_TOKEN = '/oauth/access_token';
const PATH_USER_LOGOUT = '/logout';
const PATH_USER_LOGIN_SOCIAL = '/user/login/social';
const PATH_USER_REGISTER = '/user';
const PATH_USER_FORGOT_PASSWORD = '/user/reset-password/request-reset';
const PATH_USER_VERIFICATION = '/user/:userId/validate/:verificationToken';
const PATH_USER_RESET_TOKEN_CHECK =
  '/user/reset-password/check-validity/:userId/:resetToken';
const PATH_USER_CHANGE_PASSWORD =
  '/user/reset-password/change-password/:userId';

export const FACEBOOK_PROVIDER_ENUM = 'facebook';
export const GOOGLE_PROVIDER_ENUM = 'google';

export class UserService {
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
    return ApiService.callApi(PATH_USER_REGISTER, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        firstName: user.firstname,
        dateOfBirth: getDateOfBirthFromAge(user.age),
        postalCode: user.postalcode,
        profession: user.profession,
        country: ApiService.country,
        language: ApiService.language,
      }),
    });
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
}

/* @flow */

import ApiService from './ApiService';
import { getDateOfBirthFromAge } from '../helpers/date';

const PATH_USER_ME = '/user/me';
const PATH_USER_LOGIN = '/oauth/make_access_token';
const PATH_USER_GET_TOKEN = '/oauth/access_token';
const PATH_USER_LOGOUT = '/logout';
const PATH_USER_LOGIN_SOCIAL = '/user/login/social';
const PATH_USER_REGISTER = '/user';
const PATH_USER_FORGOT_PASSWORD = '/user/reset-password/request-reset';

export const FACEBOOK_PROVIDER_ENUM = 'facebook';
export const GOOGLE_PROVIDER_ENUM = 'google';

export default class UserService {
  /**
   * Get user info
   * @return {Promise}
   */
  static me(): Promise<Object> {
    return ApiService.callApi(PATH_USER_ME, {
      method: 'GET'
    });
  }

  /**
   * Get user token
   * @return {Promise}
   */
  static getUserToken(): Promise<Object> {
    return ApiService.callApi(PATH_USER_GET_TOKEN, {
      method: 'GET'
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
      grant_type: 'password'
    };

    return ApiService.callApi(PATH_USER_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')
    });
  }

  /**
   * Logout the user
   *
   * @return {Promise}
   */
  static logout(): Promise<Object> {
    return ApiService.callApi(PATH_USER_LOGOUT, {
      method: 'POST'
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
        language: ApiService.language
      })
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
        language: ApiService.language
      })
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
      body: JSON.stringify({ email })
    });
  }
}

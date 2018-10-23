import ApiService from './ApiService';

const PATH_USER_ME = '/user/me';
const PATH_USER_LOGIN = '/oauth/make_access_token';
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
  static me() {
    return ApiService.callApi(PATH_USER_ME, {
      method: 'GET'
    });
  }

  /**
   * Login the user
   * @param  {String} email
   * @param  {String} password
   * @return {Promise}
   */
  static login(email, password) {
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
        .map(key => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`)
        .join('&')
    });
  }

  /**
   * Logout the user
   *
   * @return {Promise}
   */
  static logout() {
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
  static loginSocial(provider, token) {
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
  static register(user) {
    return ApiService.callApi(PATH_USER_REGISTER, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        firstName: user.firstname,
        postalCode: user.postalcode,
        profession: user.profession,
        country: ApiService.country,
        language: ApiService.language
      })
    });
  }

  static forgotPassword(email) {
    return ApiService.callApi(PATH_USER_FORGOT_PASSWORD, {
      method: 'POST',
      body: JSON.stringify({ email })
    });
  }
}

/* @flow */

/**
 * Detect cookie enabled
 */
export const cookieIsEnabled = () => {
  if (!navigator.cookieEnabled) {
    document.cookie = 'testcookie';
    if (document.cookie.indexOf('testcookie') === -1) {
      return false;
    }
  }
  return true;
};

export const thirdCookieEnabled = (thirdPartyCookieName: string) => {
  if (document.cookie.indexOf(thirdPartyCookieName) === -1) {
    return false;
  }

  return true;
};

/* @flow */

import UserService from 'Src/api/UserService';
import * as actionTypes from 'Src/constants/actionTypes';
import { USER_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from 'Src/constants/user';
import { loginSuccess } from 'Src/actions/authentification';
import { submitProposal } from 'Src/actions/proposal';
import { pannelClose } from 'Src/actions/pannel';
import Tracking from 'Src/services/Tracking';

export const registerRequest = () => ({ type: actionTypes.REGISTER_REQUEST });
export const registerSuccess = (user: Object) => ({ type: actionTypes.REGISTER_SUCCESS, user });
export const registerFailure = (errors: Array<Object>) => ({ type: actionTypes.REGISTER_FAILURE, errors });

export const register = (user: Object) => (dispatch: Function, getState: Function) => {
  dispatch(registerRequest());
  return UserService.register(user)
    .then((userResonse) => {
      dispatch(registerSuccess(userResonse));
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userResonse));
      Tracking.trackSignupEmailSuccess();

      return userResonse;
    })
    .then(() => (
      UserService.login(user.email, user.password)
        .then((token) => {
          const { content, canSubmit } = getState().proposal;
          dispatch(loginSuccess(token));
          localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(token));
          if (canSubmit) dispatch(submitProposal(content));
          dispatch(pannelClose());
        })
    ))
    .catch((errors) => {
      dispatch(
        registerFailure(Array.isArray(errors) ? errors : [{ field: 'global', message: 'api_error' }])
      );
      Tracking.trackSignupEmailFailure();
    });
};

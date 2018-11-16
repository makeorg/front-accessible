/* @flow */

import UserService from '../../api/UserService';
import * as actionTypes from '../../constants/actionTypes';
import { USER_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from '../../constants/user';
import { loginSuccess } from '../authentification';
import { submitProposal } from '../proposal';
import { pannelClose } from '../pannel';
import Tracking from '../../services/Tracking';

export const registerRequest = () => ({ type: actionTypes.REGISTER_REQUEST });
export const registerSuccess = (user: Object) => ({ type: actionTypes.REGISTER_SUCCESS, user });
export const registerFailure = (errors: Array<Object>) => ({ type: actionTypes.REGISTER_FAILURE, errors });

export const register = (user: Object) => (dispatch: Function, getState: Function) => {
  dispatch(registerRequest());
  return UserService.register(user)
    .then((userResonse) => {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userResonse));
      Tracking.trackSignupEmailSuccess();
      dispatch(registerSuccess(userResonse));

      return userResonse;
    })
    .then(() => (
      UserService.login(user.email, user.password)
        .then((token) => {
          const { content, canSubmit } = getState().proposal;

          localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(token));
          dispatch(loginSuccess(token));
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

/* @flow */

import UserService from 'Shared/api/UserService';
import * as actionTypes from 'Shared/store/actionTypes';
import { USER_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from 'Shared/constants/user';
import { loginSuccess } from 'Shared/store/actions/authentification';
import { submitProposal } from 'Shared/store/actions/proposal';
import { pannelClose } from 'Shared/store/actions/pannel';
import { Tracking } from 'Shared/services/Tracking';

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

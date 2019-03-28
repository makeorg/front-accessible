/* @flow */

import { UserService } from 'Shared/api/UserService';
import * as actionTypes from 'Shared/store/actionTypes';
import {
  loginSuccess,
  setUserInfo,
} from 'Shared/store/actions/authentification';
import { modalClose } from 'Shared/store/actions/modal';
import { Tracking } from 'Shared/services/Tracking';
import { type Dispatch } from 'redux';

export const registerRequest = () => ({ type: actionTypes.REGISTER_REQUEST });
export const registerSuccess = () => ({
  type: actionTypes.REGISTER_SUCCESS,
});
export const registerFailure = (errors: Array<Object>) => ({
  type: actionTypes.REGISTER_FAILURE,
  errors,
});

export const register = (user: Object) => (dispatch: Dispatch) => {
  dispatch(registerRequest());
  return UserService.register(user)
    .then(userResponse => {
      dispatch(registerSuccess());
      Tracking.trackSignupEmailSuccess();

      return userResponse;
    })
    .then(userResponse =>
      UserService.login(user.email, user.password).then(() => {
        dispatch(loginSuccess());
        dispatch(setUserInfo(userResponse));
        dispatch(modalClose());
      })
    )
    .catch(errors => {
      dispatch(
        registerFailure(
          Array.isArray(errors)
            ? errors
            : [{ field: 'global', message: 'api_error' }]
        )
      );
      Tracking.trackSignupEmailFailure();
    });
};

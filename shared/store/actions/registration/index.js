// @flow
import { UserApiService } from 'Shared/api/UserApiService';
import { type ErrorObject } from 'Shared/types/form';
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
export const registerFailure = (errors: ErrorObject[]) => ({
  type: actionTypes.REGISTER_FAILURE,
  errors,
});

export const register = (user: Object) => (dispatch: Dispatch) => {
  dispatch(registerRequest());
  return UserApiService.register(user)
    .then(userResponse => {
      dispatch(registerSuccess());
      Tracking.trackSignupEmailSuccess();

      return userResponse;
    })
    .then(userResponse =>
      UserApiService.login(user.email, user.password).then(() => {
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

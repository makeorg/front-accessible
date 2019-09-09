// @flow
import { UserApiService } from 'Shared/api/UserApiService';
import * as actionTypes from 'Shared/store/actionTypes';
import { type TypeErrorObject } from 'Shared/types/api';
import {
  loginSuccess,
  setUserInfo,
} from 'Shared/store/actions/authentification';
import { modalClose } from 'Shared/store/actions/modal';
import {
  trackSignupEmailSuccess,
  trackSignupEmailFailure,
} from 'Shared/services/Tracking';
import { type Dispatch } from 'redux';
import { defaultApiError } from 'Shared/errors/Messages';

export const registerRequest = () => ({ type: actionTypes.REGISTER_REQUEST });
export const registerSuccess = () => ({
  type: actionTypes.REGISTER_SUCCESS,
});
export const registerFailure = (errors: TypeErrorObject[]) => ({
  type: actionTypes.REGISTER_FAILURE,
  errors,
});

export const register = (user: Object) => (dispatch: Dispatch) => {
  dispatch(registerRequest());
  return UserApiService.register(user)
    .then(userResponse => {
      dispatch(registerSuccess());
      trackSignupEmailSuccess();

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
        registerFailure(Array.isArray(errors) ? errors : [defaultApiError])
      );
      trackSignupEmailFailure();
    });
};

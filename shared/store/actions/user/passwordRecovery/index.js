import { i18n } from 'Shared/i18n';
import { type Dispatch } from 'redux';
import { type StateRoot } from 'Shared/store/types';
import * as actionTypes from 'Shared/store/actionTypes';
import { UserApiService } from 'Shared/api/UserApiService';

export const passwordRecoveryRequest = (
  newPassword: string,
  resetToken: string,
  userId: string
) => ({
  type: actionTypes.PASSWORD_RECOVERY_REQUEST,
  payload: { newPassword, resetToken, userId },
});
export const passwordRecoveryFailure = (errorMessage: string) => ({
  type: actionTypes.PASSWORD_RECOVERY_FAILURE,
  payload: { errorMessage },
});
export const passwordRecoverySuccess = () => ({
  type: actionTypes.PASSWORD_RECOVERY_SUCCESS,
});

export const passwordRecovery = (newPassword: string) => (
  dispatch: Dispatch,
  getState: () => StateRoot
) => {
  const { resetToken, userId } = getState().user.passwordRecovery;
  dispatch(passwordRecoveryRequest(newPassword, resetToken, userId));
  if (newPassword.length < 8) {
    return dispatch(
      passwordRecoveryFailure(
        i18n.t('common.form.Password must be at least 8 characters')
      )
    );
  }

  return UserApiService.changePassword(newPassword, resetToken, userId)
    .then(() => {
      dispatch(passwordRecoverySuccess());
    })
    .catch(error => {
      dispatch(passwordRecoveryFailure(error));
    });
};

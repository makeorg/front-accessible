// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { modalShowRegister } from 'Shared/store/actions/modal';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { i18n } from 'Shared/i18n';
import { FacebookAuthentication } from '../Social/FacebookAuthentication';
import { GoogleAuthentication } from '../Social/GoogleAuthentication';
import {
  AuthenticationButtonWrapperStyle,
  AuthenticationEmailIconStyle,
} from '../Social/style';

export const AuthenticationRegisterButtons = () => {
  const dispatch = useDispatch();
  return (
    <AuthenticationButtonWrapperStyle data-cy-container="signup-auth-buttons">
      <GoogleAuthentication />
      <FacebookAuthentication />
      <RedButtonStyle
        onClick={() => dispatch(modalShowRegister())}
        id="authentication-register-button"
      >
        <AuthenticationEmailIconStyle aria-hidden />
        {i18n.t('common.email')}
      </RedButtonStyle>
    </AuthenticationButtonWrapperStyle>
  );
};

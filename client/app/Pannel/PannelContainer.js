/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { pannelClose } from 'Shared/store/actions/pannel';
import * as pannelContentTypes from 'Shared/constants/pannel';
import { Login } from 'Client/features/auth/Login';
import { Register } from 'Client/features/auth/Register';
import { PasswordForgot } from 'Client/features/auth/PasswordForgot';
import { PannelComponent } from './PannelComponent';

const pannelContents = {
  [pannelContentTypes.LOGIN_CONTENT]: <Login />,
  [pannelContentTypes.REGISTER_CONTENT]: <Register />,
  [pannelContentTypes.FORGOT_PASSWORD_CONTENT]: <PasswordForgot />,
};

type Props = {
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Content to render in Sliding pannel */
  contentType: string,
  /** Method called to close Sliding pannel */
  handleClose: Function,
};

/**
 * Handles Sliding Pannel Business Logic
 */
const PannelContainerSwitch = (props: Props) => {
  const { handleClose, isPannelOpen, contentType } = props;

  if (isPannelOpen) {
    return (
      <PannelComponent isPannelOpen={isPannelOpen} handleClose={handleClose}>
        {pannelContents[contentType]}
      </PannelComponent>
    );
  }

  return null;
};

const mapStateToProps = state => {
  const { isPannelOpen, contentType } = state.pannel;

  return {
    isPannelOpen,
    contentType,
  };
};

const mapDispatchToProps = dispatch => ({
  handleClose: () => {
    dispatch(pannelClose());
  },
});

export const PannelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PannelContainerSwitch);

/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import PannelComponent from 'Src/components/Pannel';
import { pannelClose } from 'Shared/store/actions/pannel';
import * as pannelContentTypes from 'Src/constants/pannel';
import LoginContainer from 'Src/containers/Login';
import RegisterContainer from 'Src/containers/Register';
import ForgotPasswordContainer from 'Src/containers/ForgotPassword';

const pannelContents = {
  [pannelContentTypes.LOGIN_CONTENT]: <LoginContainer />,
  [pannelContentTypes.REGISTER_CONTENT]: <RegisterContainer />,
  [pannelContentTypes.FORGOT_PASSWORD_CONTENT]: <ForgotPasswordContainer />
};

type Props = {
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Content to render in Sliding pannel */
  contentType: string,
  /** Method called to close Sliding pannel */
  handleClose: Function
};

/**
 * Handles Sliding Pannel Business Logic
 */
const PannelContainer = (props: Props) => {
  const { handleClose, isPannelOpen, contentType } = props;
  return (
    <PannelComponent
      isPannelOpen={isPannelOpen}
      handleClose={handleClose}
    >
      {pannelContents[contentType]}
    </PannelComponent>
  );
};


const mapStateToProps = (state) => {
  const { isPannelOpen, contentType } = state.pannel;

  return {
    isPannelOpen,
    contentType
  };
};

const mapDispatchToProps = dispatch => ({
  handleClose: () => {
    dispatch(pannelClose());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PannelContainer);

/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import PannelComponent from 'Components/Pannel';
import { pannelClose } from 'Actions/pannel';
import * as pannelContentTypes from 'Constants/pannel';
import LoginContainer from 'Containers/Login';
import RegisterContainer from 'Containers/Register';
import ForgotPasswordContainer from 'Containers/ForgotPassword';

const pannelContents = {
  [pannelContentTypes.LOGIN_CONTENT]: <LoginContainer />,
  [pannelContentTypes.REGISTER_CONTENT]: <RegisterContainer />,
  [pannelContentTypes.FORGOT_PASSWORD_CONTENT]: <ForgotPasswordContainer />
};

type Props = {
  isPannelOpen: boolean,
  contentType: string,
  handleClose: Function
};

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

import React from 'react';
import { connect } from 'react-redux';
import LoginContainer from '../Login';
import RegisterContainer from '../Register';
import ForgotPasswordContainer from '../ForgotPassword';
import PannelComponent from '../../components/Pannel';
import { pannelClose } from '../../actions/pannel';
import * as pannelContentTypes from '../../constants/pannel';

const pannelContents = {
  [pannelContentTypes.LOGIN_CONTENT]: <LoginContainer />,
  [pannelContentTypes.REGISTER_CONTENT]: <RegisterContainer />,
  [pannelContentTypes.FORGOT_PASSWORD_CONTENT]: <ForgotPasswordContainer />
};

class PannelContainer extends React.Component {
  render() {
    const { isPannelOpen, contentType, handleClose } = this.props;
    return (
      <PannelComponent
        isPannelOpen={isPannelOpen}
        handleClose={handleClose}
      >
        {pannelContents[contentType]}
      </PannelComponent>
    );
  }
}


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

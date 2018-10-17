import React from 'react';
import { connect } from 'react-redux';
import LoginContainer from '../Login';
import RegisterContainer from '../Register';
import ForgotPasswordContainer from '../ForgotPassword';
import PannelComponent from '../../components/Pannel';
import { closePannel } from '../../actions/pannel';
import * as pannelContentTypes from '../../constants/pannel';

const pannelContents = {
  [pannelContentTypes.LOGIN_CONTENT]: <LoginContainer />,
  [pannelContentTypes.REGISTER_CONTENT]: <RegisterContainer />,
  [pannelContentTypes.FORGOT_PASSWORD_CONTENT]: <ForgotPasswordContainer />
};

class PannelContainer extends React.Component {
  render() {
    const { isOpen, contentType, handleClose } = this.props;
    return (
      <PannelComponent
        isOpen={isOpen}
        handleClose={handleClose}
      >
        {pannelContents[contentType]}
      </PannelComponent>
    );
  }
}


const mapStateToProps = (state) => {
  const { isOpen, contentType } = state.pannel;

  return {
    isOpen,
    contentType
  };
};

const mapDispatchToProps = dispatch => ({
  handleClose: () => {
    dispatch(closePannel());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PannelContainer);

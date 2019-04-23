// @flow
import React from 'react';
import { connect } from 'react-redux';
import { type User as TypeUser } from 'Shared/types/user';
import { modalShowRegister, modalShowLogin } from 'Shared/store/actions/modal';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { AccessToProfileComponent } from './AccessToProfileComponent';

type Props = {
  user: TypeUser,
  handleRegisterModal: () => void,
  handleLoginModal: () => void,
};

export class AccessToProfileClass extends React.Component<Props> {
  render() {
    const { user, handleRegisterModal, handleLoginModal } = this.props;

    return (
      <AccessToProfileComponent
        user={user}
        handleRegisterModal={handleRegisterModal}
        handleLoginModal={handleLoginModal}
      />
    );
  }
}

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);
  return { user };
};

const mapDispatchToProps = dispatch => ({
  handleRegisterModal: () => {
    dispatch(modalShowRegister());
  },
  handleLoginModal: () => {
    dispatch(modalShowLogin());
  },
});

export const AccessToProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccessToProfileClass);

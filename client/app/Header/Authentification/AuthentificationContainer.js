// @flow
import React from 'react';
import { connect } from 'react-redux';
import { type User as TypeUser } from 'Shared/types/user';
import { modalShowRegister, modalShowLogin } from 'Shared/store/actions/modal';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import {
  AuthentificatedBar,
  NotAuthentificatedBar,
} from './AuthentificationComponent';

type Props = {
  user: TypeUser,
  handleRegisterModal: () => void,
  handleLoginModal: () => void,
};

export class AuthentificationClass extends React.Component<Props> {
  render() {
    const { user, handleRegisterModal, handleLoginModal } = this.props;

    if (user) {
      return <AuthentificatedBar user={user} />;
    }

    return (
      <NotAuthentificatedBar
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

export const AuthentificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthentificationClass);

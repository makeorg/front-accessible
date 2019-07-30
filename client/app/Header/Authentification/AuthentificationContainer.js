// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { type TypeUser } from 'Shared/types/user';
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

export const AuthentificationClass = ({
  user,
  handleRegisterModal,
  handleLoginModal,
}: Props) => {
  const [componentToRender, setComponentToRender] = useState(null);
  useEffect(() => {
    setComponentToRender(
      user ? (
        <AuthentificatedBar user={user} />
      ) : (
        <NotAuthentificatedBar
          handleRegisterModal={handleRegisterModal}
          handleLoginModal={handleLoginModal}
        />
      )
    );
  }, [handleLoginModal, handleRegisterModal, user]);

  return componentToRender;
};

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

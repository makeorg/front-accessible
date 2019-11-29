// @flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalShowRegister, modalShowLogin } from 'Shared/store/actions/modal';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { type StateRoot } from 'Shared/store/types';
import {
  AuthentificatedBar,
  NotAuthentificatedBar,
} from './AuthentificationComponent';

export const AuthentificationContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: StateRoot) =>
    selectAuthentification(state)
  );

  return typeof user !== 'undefined' ? (
    <AuthentificatedBar user={user} />
  ) : (
    <NotAuthentificatedBar
      handleRegisterModal={() => dispatch(modalShowRegister())}
      handleLoginModal={() => dispatch(modalShowLogin())}
    />
  );
};

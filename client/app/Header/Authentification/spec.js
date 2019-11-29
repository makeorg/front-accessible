// @flow
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from 'Shared/store';
import { AuthentificationContainer } from './AuthentificationContainer';

describe('Authentification', () => {
  describe('User is authentificated', () => {
    const user = {
      firstName: 'fooUser',
      country: 'FR',
      language: 'fr',
      profile: {
        avatarUrl: 'fooURL',
      },
    };
    const handleRegisterModal = () => {};
    const handleLoginModal = () => {};

    it('return AuthentificatedBar', () => {
      const { container } = render(
        <Provider
          store={configureStore({ user: { authentification: { user } } })}
        >
          <BrowserRouter>
            <AuthentificationContainer
              user={user}
              handleLoginModal={handleLoginModal}
              handleRegisterModal={handleRegisterModal}
            />
          </BrowserRouter>
        </Provider>
      );

      expect(container).toHaveTextContent('fooUser');
    });

    it('return NotAuthentificatedBar', () => {
      const { container } = render(
        <Provider store={configureStore()}>
          <AuthentificationContainer
            handleLoginModal={handleLoginModal}
            handleRegisterModal={handleRegisterModal}
          />
        </Provider>
      );

      expect(container).toHaveTextContent(
        'common.connexion_label/common.register_label'
      );
    });
  });
});

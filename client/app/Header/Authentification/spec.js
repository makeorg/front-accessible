// @flow
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-testing-library';
import { AuthentificationClass } from './AuthentificationContainer';

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
        <BrowserRouter>
          <AuthentificationClass
            user={user}
            handleLoginModal={handleLoginModal}
            handleRegisterModal={handleRegisterModal}
          />
        </BrowserRouter>
      );

      expect(container).toHaveTextContent('fooUser');
    });

    it('return NotAuthentificatedBar', () => {
      const { container } = render(
        <AuthentificationClass
          handleLoginModal={handleLoginModal}
          handleRegisterModal={handleRegisterModal}
        />
      );

      expect(container).toHaveTextContent(
        'common.connexion_label/common.register_label'
      );
    });
  });
});

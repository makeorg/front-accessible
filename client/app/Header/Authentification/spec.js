// @flow
import React from 'react';
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
        <AuthentificationClass
          user={user}
          handleLoginModal={handleLoginModal}
          handleRegisterModal={handleRegisterModal}
        />
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

/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { AuthentificationClass } from './AuthentificationContainer';
import {
  AuthentificatedBar,
  NotAuthentificatedBar,
} from './AuthentificationComponent';

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
      const wrapper = shallow(
        <AuthentificationClass
          user={user}
          handleLoginModal={handleLoginModal}
          handleRegisterModal={handleRegisterModal}
        />
      );

      expect(wrapper.find(AuthentificatedBar)).toHaveLength(1);
      expect(wrapper.find(NotAuthentificatedBar)).toHaveLength(0);
    });

    it('return NotAuthentificatedBar', () => {
      const wrapper = shallow(
        <AuthentificationClass
          handleLoginModal={handleLoginModal}
          handleRegisterModal={handleRegisterModal}
        />
      );

      expect(wrapper.find(AuthentificatedBar)).toHaveLength(0);
      expect(wrapper.find(NotAuthentificatedBar)).toHaveLength(1);
    });
  });
});

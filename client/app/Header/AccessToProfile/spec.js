/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { getRouteProfile } from 'Shared/routes';
import { AccessToProfileComponent } from './AccessToProfileComponent';
import { ProfileAccessLinkStyle, AvatarImgStyle } from '../Styled';

describe('AccessToProfileComponent', () => {
  const UserProps = {
    user: {
      firstName: 'fooUser',
      country: 'FR',
      language: 'fr',
      profile: {
        avatarUrl: 'fooURL',
      },
    },
  };

  it('User is connected, must matches UserProps', () => {
    const wrapper = shallow(<AccessToProfileComponent {...UserProps} />);
    const { country, language, profile, firstName } = UserProps.user;
    const countryLanguage = `${country}-${language}`;
    const UserProfileLink = wrapper.find(ProfileAccessLinkStyle);
    const UserAvatarImg = wrapper.find(AvatarImgStyle);
    const UserFirstName = wrapper.find(ProfileAccessLinkStyle);

    expect(UserProfileLink.prop('href')).toBe(getRouteProfile(countryLanguage));
    expect(UserAvatarImg.prop('src')).toBe(profile.avatarUrl);
    expect(UserFirstName.text()).toBe(firstName);
  });
});

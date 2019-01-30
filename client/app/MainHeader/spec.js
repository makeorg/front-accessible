/* @flow */

import React from 'react';
import { shallow } from 'enzyme';
import { MainHeaderComponent } from './MainHeaderComponent';
import MainHeader from './Styled';

jest.mock('Client/app/assets/images/logo.svg', () => '<LogoSvg />');

describe('MainHeaderComponent', () => {
  it('Check a11y rules', () => {
    const wrapper = shallow(<MainHeaderComponent />);

    expect(wrapper.find(MainHeader).prop('role')).toBe('banner');
  });
});

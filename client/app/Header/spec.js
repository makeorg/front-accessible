/* @flow */

import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from './HeaderComponent';
import { HeaderStyle } from './Styled';

jest.mock('Client/app/assets/images/logo.svg', () => '<LogoSvg />');

describe('HeaderComponent', () => {
  it('Check a11y rules', () => {
    const wrapper = shallow(<HeaderComponent />);

    expect(wrapper.find(HeaderStyle).prop('role')).toBe('banner');
  });
});

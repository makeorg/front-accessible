/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { PannelComponent } from './PannelComponent';
import { PannelCloseButtonStyle, PannelStyle, PannelContentStyle } from './Styled';

describe('PannelComponent', () => {
  const props = {
    isPannelOpen: true,
    handleClose: () => { },
    children: 'foo'
  };

  it('Check a11y rules when pannel is open', () => {
    const wrapper = shallow(<PannelComponent {...props} />);

    expect(wrapper.find(PannelStyle).prop('translate')).toBe(100);
    expect(wrapper.find(PannelStyle).prop('aria-hidden')).toBe('false');
    expect(wrapper.find(PannelCloseButtonStyle).prop('aria-expanded')).toBe('false');
    expect(wrapper.find(PannelCloseButtonStyle).prop('tabIndex')).toBe(0);
  });

  it('Check a11y rules when pannel is close', () => {
    const closePannelProps = {
      ...props,
      isPannelOpen: false
    };

    const wrapper = shallow(<PannelComponent {...closePannelProps} />);

    expect(wrapper.find(PannelStyle).prop('translate')).toBe(0);
    expect(wrapper.find(PannelStyle).prop('aria-hidden')).toBe('true');
    expect(wrapper.find(PannelCloseButtonStyle).prop('aria-expanded')).toBe('false');
    expect(wrapper.find(PannelCloseButtonStyle).prop('tabIndex')).toBe(-1);
  });

  it('pannel contain chilren props', () => {
    const childrenProps = {
      ...props,
      children: '<p>Foo bar</p>'
    };

    const wrapper = shallow(<PannelComponent {...childrenProps} />);

    expect(wrapper.find(PannelContentStyle).text()).toBe('<p>Foo bar</p>');
  });
});

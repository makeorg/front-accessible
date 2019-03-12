/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { PannelComponent } from './PannelComponent';
import { PannelContentStyle } from './Styled';

describe('PannelComponent', () => {
  const props = {
    isPannelOpen: true,
    handleClose: () => {},
    children: 'foo',
  };

  it('pannel contain chilren props', () => {
    const childrenProps = {
      ...props,
      children: '<p>Foo bar</p>',
    };

    const wrapper = shallow(<PannelComponent {...childrenProps} />);

    expect(wrapper.find(PannelContentStyle).text()).toBe('<p>Foo bar</p>');
  });
});

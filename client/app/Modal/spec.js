/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { ModalComponent } from './ModalComponent';

describe('ModalComponent', () => {
  const props = {
    isModalOpen: true,
    handleClose: () => {},
    children: 'foo',
  };

  it('modal contain chilren props', () => {
    const childrenProps = {
      ...props,
      children: '<p>Foo bar</p>',
    };

    const wrapper = shallow(<ModalComponent {...childrenProps} />);

    expect(wrapper.text()).toBe('<Modal />');
  });
});

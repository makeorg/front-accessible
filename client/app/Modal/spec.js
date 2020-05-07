// @flow
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

    const { isModalOpen, handleClose, children } = childrenProps;

    const wrapper = shallow(
      <ModalComponent isModalOpen={isModalOpen} handleClose={handleClose}>
        {children}
      </ModalComponent>
    );

    expect(wrapper.text()).toBe('<Modal />');
  });
});

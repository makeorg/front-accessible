// @flow
import React from 'react';
import ReactModal from 'react-modal';
import { shallow } from 'enzyme';

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
      <ReactModal isModalOpen={isModalOpen} handleClose={handleClose}>
        {children}
      </ReactModal>
    );

    expect(wrapper.text()).toBe('<ModalPortal />');
  });
});

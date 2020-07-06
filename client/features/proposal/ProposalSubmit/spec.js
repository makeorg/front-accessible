/* eslint-disable react/jsx-props-no-spreading */
/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import { ProposalSubmitDescription } from './Description';
import { ProposalSubmitForm } from './Form';
import { ProposalSubmitAuthentication } from './Authentication';
import { ProposalSubmit } from '.';
import { ProposalTextareaStyle, ProposalButtonStyle } from './style';
import { ProposalSubmitButton } from './Button/index';

// @todo: update this test, do it with different state
describe('ProposalSubmit', () => {
  const defaultProps = {
    canBeOpen: true,
    handleFocus: () => {},
  };
  const baitText = 'proposal_submit.bait';

  beforeEach(() => {
    // We need to mock both hooks
    // See https://github.com/enzymejs/enzyme/issues/2282
    // and https://github.com/enzymejs/enzyme/issues/2202
    // and https://github.com/enzymejs/enzyme/issues/2176
    jest.spyOn(redux, 'useSelector').mockImplementation(selector =>
      selector({
        user: { authentication: { isLoggedIn: false } },
        appConfig: { country: 'FR' },
      })
    );
    jest.spyOn(redux, 'useDispatch').mockReturnValue(() => {});
  });

  it('Renders Initial Props & State', () => {
    const wrapper = shallow(<ProposalSubmit {...defaultProps} />);

    expect(wrapper.find(ProposalSubmitForm)).toHaveLength(1);
    const proposalSubmitProps = wrapper
      .find(ProposalSubmitForm)
      .first()
      .props();

    expect(proposalSubmitProps.content).toBe('');
    expect(proposalSubmitProps.length).toBe(baitText.length);
    expect(proposalSubmitProps.canSubmit).toBe(true);

    expect(wrapper.find(ProposalSubmitDescription)).toHaveLength(0);
    expect(wrapper.find(ProposalSubmitAuthentication)).toHaveLength(0);
  });

  it('Renders DescriptionStyle', () => {
    const wrapper = shallow(<ProposalSubmit {...defaultProps} />);

    wrapper
      .find(ProposalSubmitForm)
      .dive()
      .find(ProposalTextareaStyle)
      .simulate('focus');
    expect(wrapper.find(ProposalSubmitDescription)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitAuthentication)).toHaveLength(0);
  });

  it('Renders Authentication', () => {
    const wrapper = shallow(<ProposalSubmit {...defaultProps} />);
    const wrapperForm = wrapper.find(ProposalSubmitForm).dive();

    wrapperForm
      .find(ProposalTextareaStyle)
      .simulate('change', { currentTarget: { value: 'make tests pass' } });
    wrapperForm
      .find(ProposalSubmitButton)
      .dive()
      .find(ProposalButtonStyle)
      .simulate('click', {
        preventDefault: () => {},
      });

    expect(wrapper.find(ProposalSubmitDescription)).toHaveLength(0);
    expect(wrapper.find(ProposalSubmitAuthentication)).toHaveLength(1);
  });
});

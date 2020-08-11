/* eslint-disable react/jsx-props-no-spreading */
/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import { DeprecatedProposalSubmitDescription } from './Description';
import { DeprecatedProposalSubmitForm } from './Form';
import { DeprecatedProposalSubmitAuthentication } from './Authentication';
import { DeprecatedProposalSubmit } from '.';
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
    const wrapper = shallow(<DeprecatedProposalSubmit {...defaultProps} />);

    expect(wrapper.find(DeprecatedProposalSubmitForm)).toHaveLength(1);
    const proposalSubmitProps = wrapper
      .find(DeprecatedProposalSubmitForm)
      .first()
      .props();

    expect(proposalSubmitProps.content).toBe('');
    expect(proposalSubmitProps.length).toBe(baitText.length);
    expect(proposalSubmitProps.canSubmit).toBe(true);

    expect(wrapper.find(DeprecatedProposalSubmitDescription)).toHaveLength(0);
    expect(wrapper.find(DeprecatedProposalSubmitAuthentication)).toHaveLength(
      0
    );
  });

  it('Renders DescriptionStyle', () => {
    const wrapper = shallow(<DeprecatedProposalSubmit {...defaultProps} />);

    wrapper
      .find(DeprecatedProposalSubmitForm)
      .dive()
      .find(ProposalTextareaStyle)
      .simulate('focus');
    expect(wrapper.find(DeprecatedProposalSubmitDescription)).toHaveLength(1);
    expect(wrapper.find(DeprecatedProposalSubmitAuthentication)).toHaveLength(
      0
    );
  });

  it('Renders Authentication', () => {
    const wrapper = shallow(<DeprecatedProposalSubmit {...defaultProps} />);
    const wrapperForm = wrapper.find(DeprecatedProposalSubmitForm).dive();

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

    expect(wrapper.find(DeprecatedProposalSubmitDescription)).toHaveLength(0);
    expect(wrapper.find(DeprecatedProposalSubmitAuthentication)).toHaveLength(
      1
    );
  });
});

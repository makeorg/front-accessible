/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { ProposalSubmitDescriptionComponent } from './Description';
import { ProposalSubmitFormComponent } from './ProposalSubmitFormComponent';
import { ProposalSubmitAuthentification } from './Authentification';
import { ProposalSubmitHandler } from './ProposalSubmitContainer';

// @todo: update this test, do it with different state
describe('ProposalSubmitContainer', () => {
  const defaultProps = {
    question: {},
    isSequenceCollapsed: true,
    isLoggedIn: true,
    isPannelOpen: false,
    language: 'fr',
    country: 'FR',
    handleProposeSuccess: () => {},
    handleCollapse: () => {},
  };
  const baitText = 'proposal_submit.bait';
  it('Renders Initial Props & State', () => {
    const wrapper = shallow(<ProposalSubmitHandler {...defaultProps} />);

    expect(wrapper.find(ProposalSubmitFormComponent)).toHaveLength(1);
    const proposalSubmitProps = wrapper
      .find(ProposalSubmitFormComponent)
      .first()
      .props();

    expect(proposalSubmitProps.content).toBe('');
    expect(proposalSubmitProps.length).toBe(baitText.length);
    expect(proposalSubmitProps.canSubmit).toBe(true);

    expect(wrapper.find(ProposalSubmitDescriptionComponent)).toHaveLength(0);
    expect(wrapper.find(ProposalSubmitAuthentification)).toHaveLength(0);
  });

  it('Renders DescriptionStyle', () => {
    const descriptionProps = {
      ...defaultProps,
    };
    const wrapper = shallow(<ProposalSubmitHandler {...descriptionProps} />);

    wrapper.setState({ isTyping: true });
    expect(wrapper.find(ProposalSubmitDescriptionComponent)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitAuthentification)).toHaveLength(0);
  });

  it('Renders Authentification', () => {
    const notLoggedInProps = {
      ...defaultProps,
      isLoggedIn: false,
    };
    const wrapper = shallow(<ProposalSubmitHandler {...notLoggedInProps} />);

    wrapper.setState({ isSubmitted: true });
    expect(wrapper.find(ProposalSubmitDescriptionComponent)).toHaveLength(0);
    expect(wrapper.find(ProposalSubmitAuthentification)).toHaveLength(1);
  });
});

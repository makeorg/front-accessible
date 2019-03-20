/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { ProposalSubmitDescriptionComponent } from './Description';
import { ProposalSubmitFormComponent } from './ProposalSubmitFormComponent';
import { ProposalSubmitAuthentification } from './Authentification';
import { ProposalSubmitHandler } from './ProposalSubmitContainer';

describe('ProposalSubmitContainer', () => {
  const defaultProps = {
    content: 'foo',
    length: 10,
    canSubmit: true,
    isLoggedIn: true,
    isSequenceCollapsed: false,
  };

  it('Renders Initial Props & State', () => {
    const wrapper = shallow(<ProposalSubmitHandler {...defaultProps} />);

    expect(wrapper.find(ProposalSubmitFormComponent)).toHaveLength(1);
    const proposalSubmitProps = wrapper
      .find(ProposalSubmitFormComponent)
      .first()
      .props();
    expect(proposalSubmitProps.content).toBe(defaultProps.content);
    expect(proposalSubmitProps.length).toBe(defaultProps.length);
    expect(proposalSubmitProps.canSubmit).toBe(defaultProps.canSubmit);

    expect(wrapper.find(ProposalSubmitDescriptionComponent)).toHaveLength(0);
    expect(wrapper.find(ProposalSubmitAuthentification)).toHaveLength(0);
  });

  it('Renders DescriptionStyle', () => {
    const descriptionProps = {
      ...defaultProps,
      isSequenceCollapsed: true,
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
      isSequenceCollapsed: true,
    };
    const wrapper = shallow(<ProposalSubmitHandler {...notLoggedInProps} />);

    wrapper.setState({ isSubmitted: true });
    expect(wrapper.find(ProposalSubmitDescriptionComponent)).toHaveLength(0);
    expect(wrapper.find(ProposalSubmitAuthentification)).toHaveLength(1);
  });
});

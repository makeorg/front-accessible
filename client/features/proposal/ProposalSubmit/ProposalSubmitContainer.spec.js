/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { ProposalSubmitDescriptionComponent } from './Description';
import { ProposalSubmitFormComponent } from './ProposalSubmitFormComponent';
import { ProposalSubmitAuthentification } from './Authentification';
import { ProposalSubmitHandler } from './ProposalSubmitContainer';

// @todo: update this test, do it with different state
describe('ProposalSubmitContainer', () => {
  const question = {};
  const isSequenceCollapsed = true;
  const isLoggedIn = true;
  const isPannelOpen = false;
  const language = 'fr';
  const country = 'FR';
  const handleProposeSuccess = () => {};
  const handleCollapse = () => {};

  const baitText = 'proposal_submit.bait';
  it('Renders Initial Props & State', () => {
    const wrapper = shallow(
      <ProposalSubmitHandler
        question={question}
        isSequenceCollapsed={isSequenceCollapsed}
        isLoggedIn={isLoggedIn}
        isPannelOpen={isPannelOpen}
        language={language}
        country={country}
        handleProposeSuccess={handleProposeSuccess}
        handleCollapse={handleCollapse}
      />
    );

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
    const wrapper = shallow(
      <ProposalSubmitHandler
        question={question}
        isSequenceCollapsed={isSequenceCollapsed}
        isLoggedIn={isLoggedIn}
        isPannelOpen={isPannelOpen}
        language={language}
        country={country}
        handleProposeSuccess={handleProposeSuccess}
        handleCollapse={handleCollapse}
      />
    );

    wrapper.setState({ isTyping: true });
    expect(wrapper.find(ProposalSubmitDescriptionComponent)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitAuthentification)).toHaveLength(0);
  });

  it('Renders Authentification', () => {
    const wrapper = shallow(
      <ProposalSubmitHandler
        question={question}
        isSequenceCollapsed={isSequenceCollapsed}
        isLoggedIn={false}
        isPannelOpen={isPannelOpen}
        language={language}
        country={country}
        handleProposeSuccess={handleProposeSuccess}
        handleCollapse={handleCollapse}
      />
    );

    wrapper.setState({ isSubmitted: true });
    expect(wrapper.find(ProposalSubmitDescriptionComponent)).toHaveLength(0);
    expect(wrapper.find(ProposalSubmitAuthentification)).toHaveLength(1);
  });
});

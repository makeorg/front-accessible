/* @flow */

import { shallow } from 'enzyme';
import ProposalSubmitDescriptionComponent from 'Components/ProposalSubmit/Description';
import ProposalSubmitFormComponent from 'Components/ProposalSubmit';
import ProposalSubmitWrapper from 'Components/ProposalSubmit/Styled';
import ProposalSubmitAuthentificationContainer from './Authentification';
import { ProposalSubmit } from './index';
import { ProposalSubmitAuthentification } from './';

describe('ProposalSubmitContainer', () => {
  const defaultProps = {
    content: 'foo',
    length: 10,
    canSubmit: true,
    isLoggedIn: true,
    isSequenceCollapsed: false
  };

  it('Renders Initial Props & State', () => {
    const wrapper = shallow(<ProposalSubmit {...defaultProps} />);

    expect(wrapper.find(ProposalSubmitFormComponent)).toHaveLength(1);
    const proposalSubmitProps = wrapper.find(ProposalSubmitFormComponent).first().props();
    expect(proposalSubmitProps.content).toBe(defaultProps.content);
    expect(proposalSubmitProps.length).toBe(defaultProps.length);
    expect(proposalSubmitProps.canSubmit).toBe(defaultProps.canSubmit);

    expect(wrapper.find(ProposalSubmitDescriptionComponent)).toHaveLength(0);
    expect(wrapper.find(ProposalSubmitAuthentificationContainer)).toHaveLength(0);
  });

  it('Renders Description', () => {
    const descriptionProps = {
      ...defaultProps,
      isSequenceCollapsed: true
    };
    const wrapper = shallow(<ProposalSubmit {...descriptionProps} />);

    wrapper.setState({ isTyping: true });
    expect(wrapper.find(ProposalSubmitDescriptionComponent)).toHaveLength(1);
    expect(wrapper.find(ProposalSubmitAuthentificationContainer)).toHaveLength(0);
  });

  it('Renders Authentification', () => {
    const notLoggedInProps = {
      ...defaultProps,
      isLoggedIn: false,
      isSequenceCollapsed: true
    };
    const wrapper = shallow(<ProposalSubmit {...notLoggedInProps} />);

    expect(wrapper.find(ProposalSubmitDescriptionComponent)).toHaveLength(0);
    expect(wrapper.find(ProposalSubmitAuthentificationContainer)).toHaveLength(1);
  });

});

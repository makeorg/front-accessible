import React from 'react';
import { shallow } from 'enzyme';
import { ProposalSubmitAuthentificationComponent } from './ProposalSubmitAuthentificationComponent';
import { ProposalSubmitAuthentification } from './ProposalSubmitAuthentificationContainer';

describe('ProposalSubmitAuthentificationContainer', () => {
  it('renders', () => {
    const props = {
      handleRegisterClick: () => {},
      handleLoginClick: () => {},
    };
    const wrapper = shallow(<ProposalSubmitAuthentification {...props} />);

    expect(wrapper.find(ProposalSubmitAuthentificationComponent)).toHaveLength(
      1
    );
    const ProposalSubmitAuthentificationProps = wrapper
      .find(ProposalSubmitAuthentificationComponent)
      .first()
      .props();
    expect(ProposalSubmitAuthentificationProps.handleRegisterClick).toBe(
      props.handleRegisterClick
    );
    expect(ProposalSubmitAuthentificationProps.handleLoginClick).toBe(
      props.handleLoginClick
    );
  });
});

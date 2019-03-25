import React from 'react';
import { shallow } from 'enzyme';
import { ProposalSubmitAuthentificationComponent } from './ProposalSubmitAuthentificationComponent';
import { ProposalSubmitAuthentificationClass } from './ProposalSubmitAuthentificationContainer';

describe('ProposalSubmitAuthentificationContainer', () => {
  it('renders', () => {
    const props = {
      question: { questionId: 'foof' },
      handleRegisterClick: () => {},
      handleLoginClick: () => {},
    };
    const wrapper = shallow(<ProposalSubmitAuthentificationClass {...props} />);

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

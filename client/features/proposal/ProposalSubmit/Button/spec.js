import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProposalSubmitButtonComponent } from '.';
import { ProposalButtonStyle, DisabledProposalButtonStyle } from '../Styled';

const enabledButtonProps = {
  canSubmit: true,
};
const disabledButtonProps = {
  canSubmit: false,
};
describe('ProposalSubmitButtonComponent', () => {
  it('Renders enabled button', () => {
    const wrapper = shallow(
      <ProposalSubmitButtonComponent {...enabledButtonProps} />
    );

    expect(wrapper.find(ProposalButtonStyle)).toHaveLength(1);
    expect(wrapper.find(ProposalButtonStyle).prop('disabled')).toBeUndefined();
  });

  it('Renders disabled button', () => {
    const wrapper = shallow(
      <ProposalSubmitButtonComponent {...disabledButtonProps} />
    );

    expect(wrapper.find(DisabledProposalButtonStyle)).toHaveLength(1);
    expect(wrapper.find(DisabledProposalButtonStyle).prop('disabled')).toBe(
      true
    );
  });

  it('Check a11y rules', () => {
    const wrapper = shallow(<ProposalSubmitButtonComponent />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).toBe(true);
  });
});

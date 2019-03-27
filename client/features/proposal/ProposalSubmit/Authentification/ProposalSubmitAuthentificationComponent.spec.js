import React from 'react';
import { shallow } from 'enzyme';
import { EmailButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { Svg } from 'Client/ui/Svg';
import { ProposalSubmitSeparatorStyle } from '../Styled';
import { ProposalSubmitAuthentificationComponent } from './ProposalSubmitAuthentificationComponent';

// mock
jest.mock('i18next');
const defaultProps = {
  question: { country: 'foo', language: 'bar' },
};

describe('ProposalSubmitAuthentificationComponent', () => {
  it('Check a11y rules', () => {
    const wrapper = shallow(
      <ProposalSubmitAuthentificationComponent {...defaultProps} />
    );
    const DescriptionLinkIcon = wrapper.find('a').find(Svg);
    const EmailButtonIcon = wrapper.find(EmailButtonStyle).find(Svg);

    expect(wrapper.find(ProposalSubmitSeparatorStyle).prop('aria-hidden')).toBe(
      true
    );
    expect(EmailButtonIcon.prop('aria-hidden')).toBe(true);
    expect(DescriptionLinkIcon.prop('aria-label')).toBe(
      'common.open_new_window'
    );
  });

  it('Check link target', () => {
    const wrapper = shallow(
      <ProposalSubmitAuthentificationComponent {...defaultProps} />
    );

    expect(wrapper.find('a').prop('target')).toBe('_blank');
  });
});

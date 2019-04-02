import React from 'react';
import { shallow } from 'enzyme';
import { EmailButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgExternalLink, SvgEnvelope } from 'Client/ui/Svg/elements';
import { ProposalSubmitSeparatorStyle } from '../Styled';
import { ProposalSubmitAuthentificationComponent } from './ProposalSubmitAuthentificationComponent';

const defaultProps = {
  question: { country: 'foo', language: 'bar' },
};

describe('ProposalSubmitAuthentificationComponent', () => {
  it('Check a11y rules', () => {
    const wrapper = shallow(
      <ProposalSubmitAuthentificationComponent {...defaultProps} />
    );
    const DescriptionLinkIcon = wrapper.find('a').find(SvgExternalLink);
    const EmailButtonIcon = wrapper.find(EmailButtonStyle).find(SvgEnvelope);

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

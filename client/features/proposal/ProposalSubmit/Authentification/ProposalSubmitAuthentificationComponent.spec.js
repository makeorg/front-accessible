import React from 'react';
import { shallow } from 'enzyme';
import { EmailButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgEnvelope } from 'Client/ui/Svg/elements';
import { ProposalSubmitAuthentificationComponent } from './ProposalSubmitAuthentificationComponent';

describe('ProposalSubmitAuthentificationComponent', () => {
  it('Check a11y rules', () => {
    const wrapper = shallow(
      <ProposalSubmitAuthentificationComponent country="FR" language="fr" />
    );
    const EmailButtonIcon = wrapper.find(EmailButtonStyle).find(SvgEnvelope);

    expect(EmailButtonIcon.prop('aria-hidden')).toBe(true);
  });
});

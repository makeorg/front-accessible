import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmailButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { Small } from 'Client/ui/Elements/Separators';
import { ProposalSubmitAuthentificationComponent } from './ProposalSubmitAuthentificationComponent';

// mock
jest.mock('i18next');

describe('ProposalSubmitAuthentificationComponent', () => {
  it('Check a11y rules', () => {
    const wrapper = shallow(<ProposalSubmitAuthentificationComponent />);
    const DescriptionLinkIcon = wrapper.find('a').find(FontAwesomeIcon);
    const EmailButtonIcon = wrapper
      .find(EmailButtonStyle)
      .find(FontAwesomeIcon);

    expect(wrapper.find(Small).prop('aria-hidden')).toBe(true);
    expect(EmailButtonIcon.prop('aria-hidden')).toBe(true);
    expect(DescriptionLinkIcon.prop('aria-label')).toBe(
      'common.open_new_window'
    );
  });

  it('Check link target', () => {
    const wrapper = shallow(<ProposalSubmitAuthentificationComponent />);

    expect(wrapper.find('a').prop('target')).toBe('_blank');
  });
});

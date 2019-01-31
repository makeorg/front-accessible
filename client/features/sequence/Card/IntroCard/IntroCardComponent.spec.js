import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Small } from 'Client/ui/Elements/Separators';
import { IntroCardComponent } from './IntroCardComponent';

describe('IntroCardComponent', () => {
  it('Check a11y rules', () => {
    const props = {
      configuration: { extraLogo: 'foo' },
      questionConfiguration: { color: 'foo' }
    };
    const wrapper = shallow(<IntroCardComponent {...props} />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).toBe(true);
    expect(wrapper.find(Small).prop('aria-hidden')).toBe(true);
  });
});

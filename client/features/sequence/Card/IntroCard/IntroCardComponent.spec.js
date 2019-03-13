import React from 'react';
import { shallow } from 'enzyme';
import { Small } from 'Client/ui/Elements/Separators';
import { IconInButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { IntroCardComponent } from './IntroCardComponent';

describe('IntroCardComponent', () => {
  it('Check a11y rules', () => {
    const props = {
      configuration: { extraLogo: 'foo' },
      questionConfiguration: { color: 'foo' },
    };
    const wrapper = shallow(<IntroCardComponent {...props} />);

    expect(wrapper.find(IconInButtonStyle).prop('aria-hidden')).toBe(true);
    expect(wrapper.find(Small).prop('aria-hidden')).toBe(true);
  });
});

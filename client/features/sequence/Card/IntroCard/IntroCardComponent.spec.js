import React from 'react';
import { shallow } from 'enzyme';
import { SmallWithMargin } from 'Client/ui/Elements/Separators';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { IntroCardComponent } from './IntroCardComponent';

describe('IntroCardComponent', () => {
  it('Check a11y rules', () => {
    const props = {
      configuration: { extraLogo: 'foo' },
      questionConfiguration: { color: 'foo' },
    };
    const wrapper = shallow(<IntroCardComponent {...props} />);

    expect(wrapper.find(IconWrapperStyle).prop('aria-hidden')).toBe(true);
    expect(wrapper.find(SmallWithMargin).prop('aria-hidden')).toBe(true);
  });
});

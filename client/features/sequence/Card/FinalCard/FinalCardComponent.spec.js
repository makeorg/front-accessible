import React from 'react';
import { shallow } from 'enzyme';
import { SvgArrowLeft } from 'Client/ui/Svg/elements';
import { FinalCardComponent } from './FinalCardComponent';

describe('FinalCardComponent', () => {
  const props = {
    configuration: { title: 'foo' },
  };

  it('Check a11y rules', () => {
    const wrapper = shallow(<FinalCardComponent {...props} />);

    expect(wrapper.find(SvgArrowLeft).prop('aria-hidden')).toBe(true);
  });
});

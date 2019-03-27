import React from 'react';
import { shallow } from 'enzyme';
import { Svg } from 'Client/ui/Svg';
import { FinalCardComponent } from './FinalCardComponent';

describe('FinalCardComponent', () => {
  const props = {
    configuration: { title: 'foo' },
  };

  it('Check a11y rules', () => {
    const wrapper = shallow(<FinalCardComponent {...props} />);

    expect(wrapper.find(Svg).prop('aria-hidden')).toBe(true);
  });
});

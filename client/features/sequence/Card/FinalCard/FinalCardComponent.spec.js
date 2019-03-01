import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FinalCardComponent } from './FinalCardComponent';

describe('FinalCardComponent', () => {
  const props = {
    configuration: { title: 'foo' },
  };

  it('Check a11y rules', () => {
    const wrapper = shallow(<FinalCardComponent {...props} />);

    expect(wrapper.find(FontAwesomeIcon).prop('aria-hidden')).toBe(true);
  });
});

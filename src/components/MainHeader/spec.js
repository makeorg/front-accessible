/* @flow */

import { shallow } from 'enzyme';
import MainHeaderComponent from './';
import MainHeader from './Styled';

describe('MainHeaderComponent', () => {
  it('Check a11y rules', () => {
    const wrapper = shallow(<MainHeaderComponent />);

    expect(wrapper.find(MainHeader).prop('role')).to.equal('banner');
  });
});

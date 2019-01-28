/* @flow */

import { shallow } from 'enzyme';
import MainHeaderComponent from './';
import MainHeader from './Styled';

jest.mock('Src/assets/images/logo.svg', () => '<LogoSvg />');

describe('MainHeaderComponent', () => {
  it('Check a11y rules', () => {
    const wrapper = shallow(<MainHeaderComponent />);

    expect(wrapper.find(MainHeader).prop('role')).toBe('banner');
  });
});

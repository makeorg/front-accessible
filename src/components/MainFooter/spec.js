import { shallow } from 'enzyme';
import MainFooterComponent from './';
import MainFooter from './Styled';

describe('MainFooterComponent', () => {
  it('Check a11y rules', () => {
    const wrapper = shallow(<MainFooterComponent />);

    expect(wrapper.find(MainFooter).prop('role')).to.equal('contentinfo');
    expect(wrapper.find(MainFooter.Nav).prop('role')).to.equal('navigation');
    expect(wrapper.find(MainFooter.Nav).prop('aria-labelledby')).to.equal('footer_title');
  });
});

/* @flow */

import { shallow } from 'enzyme';
import MainFooterComponent from './';
import MainFooter from './Styled';

describe('MainFooterComponent', () => {
  it('Check a11y rules', () => {
    const props = {
      questionConfiguration: { question: 'foo', color: 'bar'}
    }
    const wrapper = shallow(<MainFooterComponent {...props} />);

    expect(wrapper.find(MainFooter).prop('role')).to.equal('contentinfo');
    expect(wrapper.find(MainFooter.Nav).prop('role')).to.equal('navigation');
    expect(wrapper.find(MainFooter.Nav).prop('aria-labelledby')).to.equal('footer_title');
    expect(wrapper.find(MainFooter.Nav).text()).to.equal(props.questionConfiguration.question);
  });
});

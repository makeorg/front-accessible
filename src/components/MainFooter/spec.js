/* @flow */

import { shallow } from 'enzyme';
import MainFooterComponent from './';
import MainFooter from './Styled';

describe('MainFooterComponent', () => {
  it('Check a11y rules', () => {
    const props = {
      questionConfiguration: { question: 'foo', theme: { footerFontColor: 'bar' } }
    }
    const wrapper = shallow(<MainFooterComponent {...props} />);

    expect(wrapper.find(MainFooter).prop('role')).to.equal('contentinfo');
    expect(wrapper.find(MainFooter.Nav).prop('role')).to.equal('navigation');
    expect(wrapper.find(MainFooter.Nav).prop('aria-labelledby')).to.equal('footer_title');
    expect(wrapper.find(MainFooter.Nav).text()).to.equal(props.questionConfiguration.question);
    expect(wrapper.find(MainFooter.Title).prop('color')).to.equal(props.questionConfiguration.theme.footerFontColor);
    expect(wrapper.find(MainFooter.Link).prop('color')).to.equal(props.questionConfiguration.theme.footerFontColor);
  });
});

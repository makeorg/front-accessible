/* @flow */

import { shallow } from 'enzyme';
import { SequenceFooterComponent } from './';
import Sequence from '../Styled';

describe('SequenceFooterComponent', () => {
  it('Check a11y rules', () => {
    const props = {
      questionConfiguration: { wording: { question: 'foo' }, theme: { footerFontColor: 'bar' }, consultationUrl: 'baz' }
    }
    const wrapper = shallow(<SequenceFooterComponent {...props} />);

    expect(wrapper.find(Sequence.FooterNav).prop('aria-labelledby')).to.equal('footer_title');
    expect(wrapper.find(Sequence.FooterNav).text()).to.equal(props.questionConfiguration.wording.question);
    expect(wrapper.find(Sequence.FooterTitle).prop('color')).to.equal(props.questionConfiguration.theme.footerFontColor);
    expect(wrapper.find(Sequence.FooterLink).prop('color')).to.equal(props.questionConfiguration.theme.footerFontColor);
    expect(wrapper.find(Sequence.FooterLink).prop('href')).to.equal(props.questionConfiguration.consultationUrl);
  });
});

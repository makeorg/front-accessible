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

    expect(wrapper.find(Sequence.FooterNav).prop('aria-labelledby')).toBe('footer_title');
    expect(wrapper.find(Sequence.FooterNav).text()).toBe("footer_sequence.see_morefoofooter_sequence.link");
    expect(wrapper.find(Sequence.FooterTitle).prop('color')).toBe(props.questionConfiguration.theme.footerFontColor);
    expect(wrapper.find(Sequence.FooterLink).prop('color')).toBe(props.questionConfiguration.theme.footerFontColor);
    expect(wrapper.find(Sequence.FooterLink).prop('href')).toBe(props.questionConfiguration.consultationUrl);
  });
});

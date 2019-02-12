/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { SequenceFooterComponent } from './SequenceFooterComponent';
import { FooterNavStyle, FooterTitleStyle, FooterLinkStyle } from '../Styled';

describe('SequenceFooterComponent', () => {
  it('Check a11y rules', () => {
    const props = {
      questionConfiguration: { wording: { question: 'foo' }, theme: { footerFontColor: 'bar' }, consultationUrl: 'baz' }
    };
    const wrapper = shallow(<SequenceFooterComponent {...props} />);

    expect(wrapper.find(FooterNavStyle).prop('aria-labelledby')).toBe('footer_title');
    expect(wrapper.find(FooterNavStyle).text()).toBe('footer_sequence.see_morefoofooter_sequence.link');
    expect(wrapper.find(FooterTitleStyle).prop('color')).toBe(props.questionConfiguration.theme.footerFontColor);
    expect(wrapper.find(FooterLinkStyle).prop('color')).toBe(props.questionConfiguration.theme.footerFontColor);
    expect(wrapper.find(FooterLinkStyle).prop('href')).toBe(props.questionConfiguration.consultationUrl);
  });
});

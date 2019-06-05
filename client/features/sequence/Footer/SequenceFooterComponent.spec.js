/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { SequenceFooterComponent } from './SequenceFooterComponent';
import { FooterStyle, FooterTitleStyle, FooterLinkStyle } from '../Styled';

describe('SequenceFooterComponent', () => {
  it('Check a11y rules', () => {
    const props = {
      wording: { question: 'foo' },
      theme: { footerFontColor: 'bar' },
    };
    const wrapper = shallow(<SequenceFooterComponent {...props} />);

    expect(wrapper.find(FooterStyle).prop('aria-labelledby')).toBe(
      'footer_title'
    );
    expect(wrapper.find(FooterLinkStyle).text()).toBe('footer_sequence.link');
    expect(wrapper.find(FooterTitleStyle).prop('color')).toBe(
      props.theme.footerFontColor
    );
    expect(wrapper.find(FooterLinkStyle).prop('color')).toBe(
      props.theme.footerFontColor
    );
  });
});

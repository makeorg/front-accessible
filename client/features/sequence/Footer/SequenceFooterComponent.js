/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionTheme } from 'Shared/types/sequence';
import { FooterStyle, FooterTitleStyle, FooterLinkStyle } from '../Styled';

type Props = {
  /** Method called to track Footer */
  handleTracking: () => void,
  /** UI theme for the question */
  theme: QuestionTheme,
  consultationUrl: string,
  questionTitle: string,
};

/**
 * Renders Sequence Footer
 */
export const SequenceFooterComponent = (props: Props) => {
  const { theme, consultationUrl, questionTitle, handleTracking } = props;

  return (
    <FooterStyle aria-labelledby="footer_title">
      <FooterTitleStyle color={theme.footerFontColor} id="footer_title">
        {questionTitle}
      </FooterTitleStyle>
      <FooterLinkStyle
        color={theme.footerFontColor}
        target="_blank"
        href={consultationUrl}
        onClick={handleTracking}
      >
        {i18n.t('footer_sequence.link')}
      </FooterLinkStyle>
    </FooterStyle>
  );
};

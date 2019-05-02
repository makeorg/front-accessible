/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import { type QuestionTheme } from 'Shared/types/sequence';
import { FooterStyle, FooterTitleStyle, FooterLinkStyle } from '../Styled';

type Props = {
  /** UI theme for the question */
  theme: QuestionTheme,
  consultationUrl: string,
  questionTitle: string,
};

/**
 * Renders Sequence Footer
 */
export const SequenceFooterComponent = (props: Props) => {
  const { theme, consultationUrl, questionTitle } = props;

  return (
    <FooterStyle aria-labelledby="footer_title">
      <FooterTitleStyle color={theme.footerFontColor} id="footer_title">
        {questionTitle}
      </FooterTitleStyle>
      <FooterLinkStyle
        color={theme.footerFontColor}
        target="_blank"
        href={consultationUrl}
        onClick={() => Tracking.trackClickConsultation()}
      >
        {i18n.t('footer_sequence.link')}
      </FooterLinkStyle>
    </FooterStyle>
  );
};

/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { trackClickConsultation } from 'Shared/services/Tracking';
import { type QuestionTheme as TypeQuestionTheme } from 'Shared/types/question';
import { FooterStyle, FooterTitleStyle, FooterLinkStyle } from '../Styled';

type Props = {
  /** UI theme for the question */
  theme: TypeQuestionTheme,
  consultationLink: string,
  questionTitle: string,
};

/**
 * Renders Sequence Footer
 */
export const SequenceFooterComponent = (props: Props) => {
  const { theme, consultationLink, questionTitle } = props;

  return (
    <FooterStyle aria-labelledby="footer_title">
      <FooterTitleStyle
        style={{ color: theme.footerFontColor }}
        id="footer_title"
      >
        {questionTitle}
      </FooterTitleStyle>
      <FooterLinkStyle
        className={theme.footerFontColor}
        to={consultationLink}
        onClick={() => trackClickConsultation()}
      >
        {i18n.t('footer_sequence.link')}
      </FooterLinkStyle>
    </FooterStyle>
  );
};

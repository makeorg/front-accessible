// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { trackClickConsultation } from 'Shared/services/Tracking';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { getConsultationLink } from 'Shared/helpers/url';
import { FooterStyle, FooterTitleStyle, FooterLinkStyle } from '../Styled';

type Props = {
  question: TypeQuestion,
};

export const SequenceFooter = ({ question }: Props) => {
  const consultationLink = getConsultationLink(
    question.country,
    question.language,
    question.slug
  );

  return (
    <FooterStyle aria-labelledby="footer_title">
      <FooterTitleStyle id="footer_title">
        {question.wording.title}
      </FooterTitleStyle>
      <FooterLinkStyle
        to={consultationLink}
        onClick={() => trackClickConsultation}
      >
        {i18n.t('footer_sequence.link')}
      </FooterLinkStyle>
    </FooterStyle>
  );
};

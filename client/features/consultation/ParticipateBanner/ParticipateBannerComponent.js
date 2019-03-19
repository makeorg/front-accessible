import React from 'react';
import { i18n } from 'Shared/i18n';
import { Svg } from 'Client/ui/Svg';
import { Link } from 'react-router-dom';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { getSequenceLink } from 'Shared/helpers/url';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';
import {
  ParticipateWrapperStyle,
  ParticipateSeparatorStyle,
  ParticipateTitle,
} from 'Client/features/consultation/Styled/ParticipateBanner';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export const ParticipateBannerComponent = (props: Props) => {
  const { question, questionConfiguration } = props;
  const { theme } = questionConfiguration;
  return (
    <ParticipateWrapperStyle
      gradientStart={theme.gradientStart}
      gradientEnd={theme.gradientEnd}
      color={theme.gradientStart}
    >
      <ParticipateTitle>{i18n.t('consultation.banner.title')}</ParticipateTitle>
      <ParticipateSeparatorStyle aria-hidden />
      <LinkAsRedButton
        as={Link}
        to={getSequenceLink(question.slug, question.country, question.language)}
      >
        <IconWrapperStyle aria-hidden>
          <Svg type="SvgPlayButton" />
        </IconWrapperStyle>
        {i18n.t('common.participate')}
      </LinkAsRedButton>
    </ParticipateWrapperStyle>
  );
};

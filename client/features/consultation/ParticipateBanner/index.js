// @flow
import React from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { getSequenceLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { trackOpenSequence } from 'Shared/services/Tracking';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';
import {
  ParticipateWrapperStyle,
  ParticipateSeparatorStyle,
  ParticipateIntroductionStyle,
  ParticipateDescriptionStyle,
} from 'Client/features/consultation/Styled/ParticipateBanner';

type Props = {
  question: TypeQuestion,
};

export const ParticipateBanner = ({ question }: Props) => {
  const sequenceLink = getSequenceLink(
    question.country,
    question.language,
    question.slug
  );

  return (
    <ParticipateWrapperStyle aria-labelledby="participate_aside_title">
      <ParticipateIntroductionStyle id="participate_aside_title" as="p">
        {i18n.t('consultation.banner.title')}
        <ParticipateDescriptionStyle>
          {i18n.t('consultation.banner.description')}
        </ParticipateDescriptionStyle>
      </ParticipateIntroductionStyle>
      <ParticipateSeparatorStyle />
      <LinkAsRedButton as={Link} to={sequenceLink} onClick={trackOpenSequence}>
        {i18n.t('common.participate')}
      </LinkAsRedButton>
    </ParticipateWrapperStyle>
  );
};

// @flow
import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { getSequenceLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { trackOpenSequence } from 'Shared/services/Tracking';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';
import {
  ParticipateWrapperStyle,
  ParticipateInnerStyle,
  ParticipateSeparatorStyle,
  ParticipateIntroductionStyle,
} from 'Client/features/consultation/Styled/ParticipateBanner';
import { useMobile } from 'Client/hooks/useMedia';

type Props = {
  question: QuestionType,
};

export const ParticipateBanner = ({ question }: Props) => {
  const isMobile = useMobile();
  const sequenceLink = getSequenceLink(question.country, question.slug);

  return (
    <ParticipateWrapperStyle aria-labelledby="participate_aside_title">
      <ParticipateInnerStyle>
        <ParticipateIntroductionStyle id="participate_aside_title" as="p">
          {i18n.t('consultation.banner.title')}
        </ParticipateIntroductionStyle>
        {!isMobile && <ParticipateSeparatorStyle />}
        <LinkAsRedButton
          as={Link}
          to={sequenceLink}
          onClick={trackOpenSequence}
        >
          {i18n.t('common.participate')}
        </LinkAsRedButton>
      </ParticipateInnerStyle>
    </ParticipateWrapperStyle>
  );
};

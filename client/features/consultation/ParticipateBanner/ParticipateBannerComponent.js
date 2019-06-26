import React from 'react';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { Tracking } from 'Shared/services/Tracking';
import { type QuestionTheme as TypeQuestionTheme } from 'Shared/types/question';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';
import {
  ParticipateWrapperStyle,
  ParticipateSeparatorStyle,
  ParticipateDescription,
} from 'Client/features/consultation/Styled/ParticipateBanner';
import { SvgPlayButton } from 'Client/ui/Svg/elements';

type Props = {
  styleTheme: TypeQuestionTheme,
  sequenceLink: string,
};

export const ParticipateBannerComponent = (props: Props) => {
  const { styleTheme, sequenceLink } = props;
  return (
    <ParticipateWrapperStyle
      gradientStart={styleTheme.gradientStart}
      gradientEnd={styleTheme.gradientEnd}
      backgroundcolor={styleTheme.gradientStart}
      aria-labelledby="participate_aside_title"
    >
      <ParticipateDescription id="participate_aside_title">
        {i18n.t('consultation.banner.title')}
      </ParticipateDescription>
      <ParticipateSeparatorStyle />
      <LinkAsRedButton
        as={Link}
        to={sequenceLink}
        onClick={() => Tracking.trackOpenSequence()}
      >
        <IconWrapperStyle aria-hidden>
          <SvgPlayButton />
        </IconWrapperStyle>
        {i18n.t('common.participate')}
      </LinkAsRedButton>
    </ParticipateWrapperStyle>
  );
};

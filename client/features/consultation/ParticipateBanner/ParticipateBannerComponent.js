import React from 'react';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { type QuestionTheme } from 'Shared/types/sequence';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';
import {
  ParticipateWrapperStyle,
  ParticipateSeparatorStyle,
  ParticipateTitle,
} from 'Client/features/consultation/Styled/ParticipateBanner';
import { SvgPlayButton } from 'Client/ui/Svg/elements';

type Props = {
  styleTheme: QuestionTheme,
  sequenceLink: string,
  trackParticipateButton: () => void,
};

export const ParticipateBannerComponent = (props: Props) => {
  const { styleTheme, sequenceLink, trackParticipateButton } = props;
  return (
    <ParticipateWrapperStyle
      gradientStart={styleTheme.gradientStart}
      gradientEnd={styleTheme.gradientEnd}
      color={styleTheme.gradientStart}
    >
      <ParticipateTitle>{i18n.t('consultation.banner.title')}</ParticipateTitle>
      <ParticipateSeparatorStyle aria-hidden />
      <LinkAsRedButton
        as={Link}
        to={sequenceLink}
        onClick={trackParticipateButton}
      >
        <IconWrapperStyle aria-hidden>
          <SvgPlayButton />
        </IconWrapperStyle>
        {i18n.t('common.participate')}
      </LinkAsRedButton>
    </ParticipateWrapperStyle>
  );
};

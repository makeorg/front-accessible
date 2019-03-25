import React from 'react';
import { Link } from 'react-router-dom';
import { Svg } from 'Client/ui/Svg';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { ThirdLevelTtitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { ParagraphRedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { SidebarSeparatorStyle } from 'Client/ui/Elements/SidebarTile/Styled';
import { ParticipateButtonStyle } from '../Styled/Partners';
import { PartnersList } from './List';

type Props = {
  questionConfiguration: QuestionConfiguration,
  sequenceLink: string,
  trackParticipateButton: () => void,
  trackMoreLink: () => void,
};

export const PartnersComponent = (props: Props) => {
  const {
    questionConfiguration,
    sequenceLink,
    trackParticipateButton,
    trackMoreLink,
  } = props;
  return (
    <React.Fragment>
      <ParagraphStyle>
        {i18n.t('consultation.partners.intro_text')}
      </ParagraphStyle>
      <ParticipateButtonStyle
        as={Link}
        to={sequenceLink}
        onClick={trackParticipateButton}
      >
        <IconWrapperStyle aria-hidden>
          <Svg type="SvgPlayButton" />
        </IconWrapperStyle>
        {i18n.t('common.participate')}
      </ParticipateButtonStyle>
      <ThirdLevelTtitleStyle>
        {i18n.t('consultation.partners.commitment_title')}
      </ThirdLevelTtitleStyle>
      <SidebarSeparatorStyle />
      <ParagraphStyle>
        {i18n.t('consultation.partners.commitment_text')}
      </ParagraphStyle>
      <PartnersList partners={questionConfiguration.partners} />
      <ParagraphRedLinkStyle
        href={questionConfiguration.aboutUrl}
        target="_blank"
        onClick={trackMoreLink}
      >
        {i18n.t('consultation.partners.commitment_link')}
      </ParagraphRedLinkStyle>
    </React.Fragment>
  );
};

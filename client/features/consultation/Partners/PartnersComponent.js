// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { ParagraphRedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { TileSeparatorStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { SvgPlayButton, SvgExternalLink } from 'Client/ui/Svg/elements';
import { getPartnerAnchor } from 'Shared/helpers/url';
import { MakeThemeColors } from 'Client/app/assets/vars/Colors';
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

  const partners = questionConfiguration.partners.filter(
    partner => !partner.isFounder
  );

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
          <SvgPlayButton />
        </IconWrapperStyle>
        {i18n.t('common.participate')}
      </ParticipateButtonStyle>
      <ThirdLevelTitleStyle>
        {i18n.t('consultation.partners.commitment_title')}
      </ThirdLevelTitleStyle>
      <TileSeparatorStyle />
      <ParagraphStyle>
        {i18n.t('consultation.partners.commitment_text')}
      </ParagraphStyle>
      {partners && <PartnersList partners={partners} />}
      <ParagraphRedLinkStyle
        href={getPartnerAnchor(questionConfiguration.aboutUrl)}
        target="_blank"
        onClick={trackMoreLink}
      >
        {i18n.t('consultation.partners.commitment_link')}
        <SvgExternalLink
          aria-label={i18n.t('common.open_new_window')}
          style={{ marginLeft: '5px', fill: MakeThemeColors.Red }}
        />
      </ParagraphRedLinkStyle>
    </React.Fragment>
  );
};

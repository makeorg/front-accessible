import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IconInButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { ThirdLevelTtitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { RedLink } from 'Client/ui/Elements/LinkElements';
import {
  SidebarTileStyle,
  SidebarSeparatorStyle,
} from 'Client/ui/Elements/SidebarTile/Styled';
import { getSequenceLink } from 'Shared/helpers/url';
import { TooltipWithTrigger } from 'Client/ui/Tooltip';
import { TopTooltipStyle } from 'Client/ui/Elements/TooltipElements';
import { ParticipateButtonStyle, PartnersListStyle } from '../Styled/Partners';
import { PartnerAvatar } from './Avatar';
import { PartnerTooltip } from './Tooltip';

type Props = {
  questionConfiguration: QuestionConfiguration,
  questionSlug: string,
  country: string,
  language: string,
};

export const PartnersComponent = (props: Props) => {
  const { questionConfiguration, questionSlug, country, language } = props;
  return (
    <SidebarTileStyle>
      <ThirdLevelTtitleStyle>
        {i18n.t('consultation.partners.intro_title')}
      </ThirdLevelTtitleStyle>
      <SidebarSeparatorStyle />
      <ParagraphStyle>
        {i18n.t('consultation.partners.intro_text')}
      </ParagraphStyle>
      <ParticipateButtonStyle
        as="a"
        href={getSequenceLink(questionSlug, country, language)}
      >
        <IconInButtonStyle>
          <FontAwesomeIcon icon={faPlay} />
        </IconInButtonStyle>
        {i18n.t('common.participate')}
      </ParticipateButtonStyle>
      <ThirdLevelTtitleStyle>
        {i18n.t('consultation.partners.commitment_title')}
      </ThirdLevelTtitleStyle>
      <SidebarSeparatorStyle />
      <ParagraphStyle>
        {i18n.t('consultation.partners.commitment_text')}
      </ParagraphStyle>
      <PartnersListStyle>
        {questionConfiguration.partners.map(partner => (
          <li key={partner.name}>
            <TooltipWithTrigger
              tooltipType={TopTooltipStyle}
              triggerContent={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <PartnerAvatar
                  partnerName={partner.name}
                  partnerLogo={partner.imageUrl}
                />
              }
            >
              <PartnerTooltip
                partnerName={partner.name}
                isFounder={partner.isFounder}
              />
            </TooltipWithTrigger>
          </li>
        ))}
      </PartnersListStyle>
      <RedLink href={questionConfiguration.aboutUrl} target="_blank">
        {i18n.t('consultation.partners.commitment_link')}
      </RedLink>
    </SidebarTileStyle>
  );
};

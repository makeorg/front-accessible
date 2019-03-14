import React from 'react';
import { Link } from 'react-router-dom';
import { Svg } from 'Client/ui/Svg';
import { IconInButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { ThirdLevelTtitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { ParagraphRedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { SidebarSeparatorStyle } from 'Client/ui/Elements/SidebarTile/Styled';
import { getSequenceLink } from 'Shared/helpers/url';
import { ParticipateButtonStyle } from '../Styled/Partners';
import { PartnersList } from './List';

type Props = {
  questionConfiguration: QuestionConfiguration,
  question: Question,
};

export const PartnersComponent = (props: Props) => {
  const { questionConfiguration, question } = props;
  return (
    <React.Fragment>
      <ParagraphStyle>
        {i18n.t('consultation.partners.intro_text')}
      </ParagraphStyle>
      <ParticipateButtonStyle
        as={Link}
        to={getSequenceLink(question.slug, question.country, question.language)}
      >
        <IconInButtonStyle>
          <Svg type="SvgPlayButton" />
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
      <PartnersList partners={questionConfiguration.partners} />
      <ParagraphRedLinkStyle
        href={questionConfiguration.aboutUrl}
        target="_blank"
      >
        {i18n.t('consultation.partners.commitment_link')}
      </ParagraphRedLinkStyle>
    </React.Fragment>
  );
};

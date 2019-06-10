// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { TileSeparatorStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { SvgPlayButton } from 'Client/ui/Svg/elements';
import { getPartnerAnchor, getSequenceLink } from 'Shared/helpers/url';
import { Tracking } from 'Shared/services/Tracking';
import { ParticipateButtonStyle } from '../Styled/Partners';
import { PartnersList } from './List';
import { SidebarNewWindowLink } from '../SidebarLink';

type Props = {
  questionConfiguration: TypeQuestionConfiguration,
  question: TypeQuestion,
};

export const Partners = (props: Props) => {
  const { questionConfiguration, question } = props;

  const sequenceLink = getSequenceLink(
    question.country,
    question.language,
    question.slug
  );

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
        onClick={() => Tracking.trackParticipatePartners()}
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
      <SidebarNewWindowLink
        linkUrl={getPartnerAnchor(question.aboutUrl)}
        linkText={i18n.t('consultation.partners.commitment_link')}
        tracking={() => Tracking.trackSeeMorePartners()}
      />
    </React.Fragment>
  );
};

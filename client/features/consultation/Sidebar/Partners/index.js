// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { TileSeparatorStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { getPartnerAnchor, getSequenceLink } from 'Shared/helpers/url';
import {
  trackParticipatePartners,
  trackSeeMorePartners,
} from 'Shared/services/Tracking';
import { isInProgress } from 'Shared/helpers/date';
import { ParticipateButtonStyle } from 'Client/features/consultation/Styled/Partners';
import { SidebarNewWindowLink } from 'Client/features/consultation/Sidebar/Link';
import { PartnersList } from './List';

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

  const partners = questionConfiguration.partners
    ? questionConfiguration.partners.filter(partner => !partner.isFounder)
    : [];

  return (
    <React.Fragment>
      {isInProgress(question) && (
        <React.Fragment>
          <ParagraphStyle>
            {i18n.t('consultation.partners.intro_text')}
          </ParagraphStyle>
          <ParticipateButtonStyle
            as={Link}
            to={sequenceLink}
            onClick={trackParticipatePartners}
          >
            {i18n.t('common.participate')}
          </ParticipateButtonStyle>
          <FourthLevelTitleStyle as="h3">
            {i18n.t('consultation.partners.commitment_title')}
          </FourthLevelTitleStyle>
          <TileSeparatorStyle />
        </React.Fragment>
      )}
      <ParagraphStyle>
        {i18n.t('consultation.partners.commitment_text')}
      </ParagraphStyle>
      {partners && <PartnersList partners={partners} />}
      <SidebarNewWindowLink
        linkUrl={getPartnerAnchor(question.aboutUrl)}
        linkText={i18n.t('consultation.partners.commitment_link')}
        tracking={() => trackSeeMorePartners()}
      />
    </React.Fragment>
  );
};

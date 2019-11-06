// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import {
  type Question as TypeQuestion,
  type TypePartner,
} from 'Shared/types/question';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { TileSeparatorStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { getPartnerAnchor, getSequenceLink } from 'Shared/helpers/url';
import {
  trackSeeMorePartners,
  trackOpenSequence,
} from 'Shared/services/Tracking';
import { isInProgress } from 'Shared/helpers/date';
import { ParticipateButtonStyle } from 'Client/features/consultation/Styled/Partners';
import { SidebarNewWindowLink } from 'Client/features/consultation/Sidebar/Link';
import { ACTION_PARTNER } from 'Shared/constants/partner';
import { PartnersList } from './List';

type Props = {
  question: TypeQuestion,
};

export const Partners = (props: Props) => {
  const { question } = props;

  const sequenceLink = getSequenceLink(
    question.country,
    question.language,
    question.slug
  );

  const partners: TypePartner[] = question.partners
    ? question.partners.filter(
        partner => partner.partnerKind === ACTION_PARTNER
      )
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
            onClick={trackOpenSequence}
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

// @flow
import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import { ConsultationPageSidebarStyle } from 'Client/pages/Consultation/style';
import { useMobile } from 'Client/hooks/useMedia';
import {
  getIsActiveFeature,
  checkIsFeatureActivated,
} from 'Client/helper/featureFlipping';
import {
  CONSULTATION_FOLLOW_US_ACTIVE,
  CONSULTATION_POPULAR_TAGS,
  CONSULTATION_SIDEBAR_ACTIVE_ACTORS,
} from 'Shared/constants/featureFlipping';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { PopularTags } from 'Client/features/flipping/PopularTags';
import { LocalActorsTile } from 'Client/features/flipping/LocalActors/Tille';
import { PresentationTile } from './Tiles/Presentation';
import { PartnersTile } from './Tiles/Partners';
import { MethodologyTile } from './Tiles/Methodology';

type Props = {
  question: QuestionType,
};
export const ConsultationSidebar = ({ question }: Props) => {
  const isMobile = useMobile();
  const isActiveFeature = getIsActiveFeature(question.activeFeatures);
  const isSidebarActiveActors = checkIsFeatureActivated(
    CONSULTATION_SIDEBAR_ACTIVE_ACTORS,
    question.activeFeatures
  );

  return (
    <ConsultationPageSidebarStyle
      id="sidebar_content"
      aria-label={i18n.t('common.sidebar_area')}
      bottomAffix={isGreatCause(question.operationKind)}
    >
      <PresentationTile question={question} />
      {isGreatCause(question.operationKind) && (
        <PartnersTile question={question} />
      )}
      {isSidebarActiveActors && !isMobile && (
        <LocalActorsTile question={question} />
      )}
      {question.displayResults && <MethodologyTile />}
      {isActiveFeature(CONSULTATION_POPULAR_TAGS) && (
        <PopularTags question={question} />
      )}
      {isActiveFeature(CONSULTATION_FOLLOW_US_ACTIVE) && !isMobile && (
        <FollowUs />
      )}
    </ConsultationPageSidebarStyle>
  );
};

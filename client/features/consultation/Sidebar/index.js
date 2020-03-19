// @flow
import React from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import { ConsultationPageSidebarStyle } from 'Client/pages/Consultation/style';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { useMobile } from 'Client/hooks/useMedia';
import {
  getIsActiveFeature,
  checkIsFeatureActivated,
} from 'Client/helper/featureFlipping';
import { DepartmentModification } from 'Client/custom/cdc/departmentModification';
import { useCustomDataSelector } from 'Client/hooks/useCustomDataSelector';
import { DEPARTMENT_STORAGE_KEY } from 'Shared/constants/ids';
import {
  CONSULTATION_DEPARTMENT_COMPULSORY,
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
  question: TypeQuestion,
};
export const ConsultationSidebar = ({ question }: Props) => {
  const isMobile = useMobile();
  const isActiveFeature = getIsActiveFeature(question.activeFeatures);
  const departmentNumber = useCustomDataSelector(DEPARTMENT_STORAGE_KEY);
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
      {/* @todo remove or refactor when CDC consultation is over */}
      {isActiveFeature(CONSULTATION_DEPARTMENT_COMPULSORY) && departmentNumber && (
        <TileWithTitle
          title={i18n.t('modal.department_required.modification.title')}
        >
          <DepartmentModification departmentNumber={departmentNumber} />
        </TileWithTitle>
      )}
      {isActiveFeature(CONSULTATION_POPULAR_TAGS) && (
        <PopularTags question={question} />
      )}
      {isActiveFeature(CONSULTATION_FOLLOW_US_ACTIVE) && !isMobile && (
        <FollowUs />
      )}
    </ConsultationPageSidebarStyle>
  );
};

// @flow
import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import { ConsultationPageSidebarStyle } from 'Client/pages/Consultation/style';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { PopularTags } from 'Client/features/flipping/PopularTags';
import { LocalActorsTile } from 'Client/features/flipping/LocalActors/Tille';
import { useMobile } from 'Client/hooks/useMedia';
import { PresentationTile } from './Tiles/Presentation';
import { PartnersTile } from './Tiles/Partners';
import { MethodologyTile } from './Tiles/Methodology';

type Props = {
  question: QuestionType,
};
export const ConsultationSidebar = ({ question }: Props) => {
  const isMobile = useMobile();
  return (
    <ConsultationPageSidebarStyle
      id="sidebar_content"
      aria-label={i18n.t('common.sidebar_area')}
      bottomAffix={isGreatCause(question.operationKind)}
    >
      <PresentationTile question={question} />
      <PartnersTile question={question} />
      {!isMobile && <LocalActorsTile question={question} />}
      <MethodologyTile question={question} />
      <PopularTags question={question} />
      {!isMobile && <FollowUs question={question} />}
    </ConsultationPageSidebarStyle>
  );
};

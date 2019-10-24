// @flow
import React from 'react';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import { ConsultationPageSidebarStyle } from 'Client/pages/Consultation/Styled';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Sharing } from 'Client/features/sharing';
import { useMobile } from 'Client/hooks/useMedia';
import { PresentationTile } from '../Tiles/Presentation';
import { PartnersTile } from '../Tiles/Partners';
import { MethodologyTile } from '../Tiles/Methodology';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
};
export const ConsultationPannelSidebar = ({
  question,
  questionConfiguration,
}: Props) => {
  const isMobile = useMobile();

  return (
    <ConsultationPageSidebarStyle
      id="sidebar_content"
      aria-label={i18n.t('common.sidebar_area')}
      bottomAffix={isGreatCause(question.operationKind)}
    >
      <PresentationTile
        question={question}
        questionConfiguration={questionConfiguration}
      />
      {isGreatCause(question.operationKind) && (
        <PartnersTile
          question={question}
          questionConfiguration={questionConfiguration}
        />
      )}
      {question.displayResults && <MethodologyTile />}
      {!isMobile && (
        <TileWithTitle title={i18n.t('consultation.sharing.title')}>
          <Sharing />
        </TileWithTitle>
      )}
    </ConsultationPageSidebarStyle>
  );
};

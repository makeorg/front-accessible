// @flow
import React from 'react';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import { ConsultationPageSidebarStyle } from 'Client/pages/Consultation/Styled';
import { TileWithCollapse } from 'Client/ui/Elements/TileWithCollapse';
import { trackOpenLearnMore } from 'Shared/services/Tracking';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Sharing } from 'Client/features/sharing';
import { Partners } from 'Client/features/consultation/Partners';
import { Presentation } from 'Client/features/consultation/Presentation';
import { useMobile } from 'Client/hooks/useMedia';
import { isInProgress } from 'Shared/helpers/date';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

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
      <TileWithCollapse
        title={i18n.t('consultation.presentation.title')}
        forceExpand
        trackCollapse={(action: string) => trackOpenLearnMore(action)}
        questionId={question.questionId}
      >
        <Presentation
          questionConfiguration={questionConfiguration}
          question={question}
        />
      </TileWithCollapse>
      {isGreatCause(question.operationKind) && (
        <TileWithCollapse
          title={
            isInProgress(question)
              ? i18n.t('consultation.partners.intro_title')
              : i18n.t('consultation.partners.commitment_title')
          }
          forceExpand
        >
          <Partners
            questionConfiguration={questionConfiguration}
            question={question}
          />
        </TileWithCollapse>
      )}
      {question.displayResults && (
        <TileWithCollapse
          title={i18n.t('consultation.results.methodology.title')}
          forceExpand
        >
          <ParagraphStyle>
            {i18n.t('consultation.results.methodology.description')}
          </ParagraphStyle>
        </TileWithCollapse>
      )}
      {!isMobile && (
        <TileWithTitle title={i18n.t('consultation.sharing.title')}>
          <Sharing />
        </TileWithTitle>
      )}
    </ConsultationPageSidebarStyle>
  );
};

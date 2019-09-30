// @flow
import React from 'react';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import { ConsultationPageSidebarStyle } from 'Client/pages/Consultation/Styled';
import { Collapse } from 'Client/ui/Elements/Collapse';
import { trackOpenLearnMore } from 'Shared/services/Tracking';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Sharing } from 'Client/features/sharing';
import { Partners } from 'Client/features/consultation/Partners';
import { Presentation } from 'Client/features/consultation/Presentation';
import { useMobile } from 'Client/hooks/useMedia';
import { isInProgress } from 'Shared/helpers/date';

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
      <Collapse
        title={i18n.t('consultation.presentation.title')}
        forceExpand
        trackCollapse={(action: string) => trackOpenLearnMore(action)}
        questionId={question.questionId}
      >
        <Presentation
          questionConfiguration={questionConfiguration}
          question={question}
        />
      </Collapse>
      {isGreatCause(question.operationKind) && (
        <Collapse
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
        </Collapse>
      )}
      {!isMobile && (
        <TileWithTitle title={i18n.t('consultation.sharing.title')}>
          <Sharing />
        </TileWithTitle>
      )}
    </ConsultationPageSidebarStyle>
  );
};

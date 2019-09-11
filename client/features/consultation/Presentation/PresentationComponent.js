// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { trackClickLearnMore } from 'Shared/services/Tracking';
import { Founders } from '../Founders';
import { SidebarNewWindowLink } from '../SidebarLink';

type Props = {
  questionConfiguration: TypeQuestionConfiguration,
  question: TypeQuestion,
};

export const PresentationComponent = ({
  questionConfiguration,
  question,
}: Props) => {
  const founders = questionConfiguration.partners
    ? questionConfiguration.partners.filter(partner => partner.isFounder)
    : [];

  return (
    <React.Fragment>
      {questionConfiguration.consultation && (
        <ParagraphStyle
          id="presentation_text"
          dangerouslySetInnerHTML={{
            __html: questionConfiguration.consultation.presentation,
          }}
        />
      )}
      <SidebarNewWindowLink
        linkUrl={question.aboutUrl}
        linkText={i18n.t('consultation.presentation.link_text')}
        tracking={() => trackClickLearnMore()}
      />
      <Founders
        founders={founders}
        isGreatCause={isGreatCause(question.operationKind)}
      />
    </React.Fragment>
  );
};

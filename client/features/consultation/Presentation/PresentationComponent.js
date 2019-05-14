// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { ParagraphRedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { Founders } from '../Founders';

type Props = {
  questionConfiguration: TypeQuestionConfiguration,
};

export const PresentationComponent = (props: Props) => {
  const { questionConfiguration } = props;
  return (
    <React.Fragment>
      <ParagraphStyle
        id="presentation_text"
        dangerouslySetInnerHTML={{
          __html: questionConfiguration.consultation.presentation,
        }}
      />

      <ParagraphRedLinkStyle
        href={questionConfiguration.aboutUrl}
        target="_blank"
        onClick={() => Tracking.trackClickLearnMore()}
      >
        {i18n.t('consultation.presentation.link_text')}
      </ParagraphRedLinkStyle>
      <Founders questionConfiguration={questionConfiguration} />
    </React.Fragment>
  );
};

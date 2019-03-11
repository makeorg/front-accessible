import React from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { RedLink } from 'Client/ui/Elements/LinkElements';
import { Founders } from '../Founders';

type Props = {
  questionConfiguration: QuestionConfiguration,
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

      <RedLink href={questionConfiguration.aboutUrl} target="_blank">
        {i18n.t('consultation.presentation.link_text')}
      </RedLink>
      {!questionConfiguration.isGreatCause && (
        <Founders questionConfiguration={questionConfiguration} />
      )}
    </React.Fragment>
  );
};

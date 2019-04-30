import React from 'react';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { getSequenceLink } from 'Shared/helpers/url';
import { ParticipateBannerComponent } from './ParticipateBannerComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export const ParticipateBannerContainer = (props: Props) => {
  const { question, questionConfiguration } = props;
  const { theme } = questionConfiguration;
  const sequenceLink = getSequenceLink(
    question.country,
    question.language,
    question.slug
  );

  return (
    <ParticipateBannerComponent
      styleTheme={theme}
      sequenceLink={sequenceLink}
    />
  );
};

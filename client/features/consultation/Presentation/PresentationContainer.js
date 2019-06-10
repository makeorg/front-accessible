import React from 'react';
import { isGreatCause } from 'Shared/helpers/question';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { PresentationComponent } from './PresentationComponent';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
};

export const PresentationContainer = ({
  question,
  questionConfiguration,
}: Props) => (
  <PresentationComponent
    questionConfiguration={questionConfiguration}
    isGreatCause={isGreatCause(question.operationKind)}
  />
);

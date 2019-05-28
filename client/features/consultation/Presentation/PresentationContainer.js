import React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { PresentationComponent } from './PresentationComponent';

type Props = {
  questionConfiguration: QuestionConfiguration,
};

export const PresentationContainer = (props: Props) => {
  const { questionConfiguration } = props;

  return (
    <PresentationComponent questionConfiguration={questionConfiguration} />
  );
};

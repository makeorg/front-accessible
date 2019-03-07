import React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { SequenceFooter } from 'Client/features/sequence/Footer';
import { SequencePageContentLoader } from './ContentLoader';
import { SequencePageContentStyle } from './Styled';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export const SequencePageComponent = (props: Props) => {
  const { question, questionConfiguration } = props;
  return (
    <React.Fragment>
      <SequencePageContentStyle>
        <SequencePageContentLoader
          question={question}
          questionConfiguration={questionConfiguration}
        />
      </SequencePageContentStyle>
      <SequenceFooter questionConfiguration={questionConfiguration} />
    </React.Fragment>
  );
};

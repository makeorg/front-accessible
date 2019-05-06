import React from 'react';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { SequenceFooter } from 'Client/features/sequence/Footer';
import { SequencePageContentLoader } from './ContentLoader';
import { SequencePageContentStyle } from './Styled';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
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
      <SequenceFooter
        question={question}
        questionConfiguration={questionConfiguration}
      />
    </React.Fragment>
  );
};

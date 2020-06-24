// @flow
import React from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { RegistrationIncentive } from 'Client/features/consultation/Browse/RegistrationIncentive';
import { ConsultationItem } from 'Client/features/consultation/Browse/Item';
import { ConsultationsListStyle, ConsultationsListItemStyle } from './style';

type Props = {
  questions: HomeQuestionType[] | [],
  resultsContext?: boolean,
};

export const BrowseConsultationsList = ({
  questions,
  resultsContext = false,
}: Props) => {
  const numberOfQuestions = questions.length;
  const hasQuestions = numberOfQuestions > 0;
  const hasOneQuestion = numberOfQuestions === 1;
  let ITEMS_PER_ROW = 4;

  if (hasOneQuestion) {
    // setted at 2 because one question + RegistrationIncentive will be rendered
    ITEMS_PER_ROW = 2;
  }

  if (!hasOneQuestion && numberOfQuestions < ITEMS_PER_ROW) {
    ITEMS_PER_ROW = numberOfQuestions;
  }

  if (!hasQuestions) {
    return <RegistrationIncentive length={numberOfQuestions} />;
  }

  return (
    <ConsultationsListStyle>
      {questions.map(question => (
        <ConsultationsListItemStyle
          itemsPerRow={ITEMS_PER_ROW}
          key={question.questionId}
        >
          <ConsultationItem
            key={question.questionId}
            question={question}
            resultsContext={resultsContext}
          />
        </ConsultationsListItemStyle>
      ))}
      {hasOneQuestion && (
        <ConsultationsListItemStyle itemsPerRow={ITEMS_PER_ROW}>
          <RegistrationIncentive length={numberOfQuestions} />
        </ConsultationsListItemStyle>
      )}
    </ConsultationsListStyle>
  );
};

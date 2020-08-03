// @flow
import React from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { RegistrationIncentive } from 'Client/features/consultation/Browse/RegistrationIncentive';
import { ConsultationItem } from 'Client/features/consultation/Browse/Item';
import { BrowsePageInnerStyle } from 'Client/pages/Browse/style';
import { ConsultationsListStyle, ConsultationsListItemStyle } from './style';

type Props = {
  questions: HomeQuestionType[] | [],
  resultsContext?: boolean,
  total: number,
};

export const BrowseConsultationsList = ({
  questions,
  resultsContext = false,
  total,
}: Props) => {
  const hasQuestions = total > 0;
  const hasOneQuestion = total === 1;
  let ITEMS_PER_ROW = 4;

  if (hasOneQuestion) {
    // setted at 2 because one question + RegistrationIncentive will be rendered
    ITEMS_PER_ROW = 2;
  }

  if (!hasOneQuestion && total < ITEMS_PER_ROW) {
    ITEMS_PER_ROW = total;
  }

  if (!hasQuestions) {
    return (
      <BrowsePageInnerStyle>
        <RegistrationIncentive length={total} />
      </BrowsePageInnerStyle>
    );
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
          <RegistrationIncentive length={total} />
        </ConsultationsListItemStyle>
      )}
    </ConsultationsListStyle>
  );
};

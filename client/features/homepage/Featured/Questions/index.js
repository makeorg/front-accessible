// @flow
import React from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { orderByEndDate } from 'Shared/helpers/date';
import { FeaturedListItemStyle } from './style';
import { FeaturedLink } from './Link';

type Props = {
  questions: HomeQuestionType[],
};

export const FeaturedQuestions = ({ questions }: Props) => {
  const sortedQuestions = questions.sort(orderByEndDate);
  return (
    <nav data-cy-container="featured_questions_navigation">
      <UnstyledListStyle>
        {sortedQuestions.map(question => (
          <FeaturedListItemStyle key={question.questionId}>
            <FeaturedLink question={question} />
          </FeaturedListItemStyle>
        ))}
      </UnstyledListStyle>
    </nav>
  );
};

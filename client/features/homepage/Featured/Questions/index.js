// @flow
import React from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { orderByEndDate } from 'Shared/helpers/date';
import { Link } from 'react-router-dom';
import { getConsultationLink } from 'Shared/helpers/url';
import { scrollToTop } from 'Shared/helpers/styled';
import {
  FeaturedListItemStyle,
  FeaturedLinkStyle,
  FeaturedLinkIconStyle,
} from './style';

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
            <FeaturedLinkStyle
              as={Link}
              to={getConsultationLink(
                question.country,
                question.language,
                question.questionSlug
              )}
              onClick={scrollToTop}
            >
              {question.operationTitle}
              <FeaturedLinkIconStyle aria-hidden />
            </FeaturedLinkStyle>
          </FeaturedListItemStyle>
        ))}
      </UnstyledListStyle>
    </nav>
  );
};

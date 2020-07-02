// @flow
import React from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { ConsultationElementSubtitleStyle } from 'Client/features/consultation/Browse/style';
import { i18n } from 'Shared/i18n';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { orderByEndDate } from 'Shared/helpers/date';
import { Link } from 'react-router-dom';
import { getConsultationLink } from 'Shared/helpers/url';
import { scrollToTop } from 'Shared/helpers/styled';
import {
  HomepageSectionTitleStyle,
  HomepageSectionStyle,
} from 'Client/pages/Home/style';
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
    <HomepageSectionStyle
      as="section"
      aria-labelledby="featured_questions_title"
    >
      <ConsultationElementSubtitleStyle data-cy-container="featured_questions_subtitle">
        {i18n.t('homepage.featured_questions.label')}
      </ConsultationElementSubtitleStyle>
      <HomepageSectionTitleStyle
        data-cy-container="featured_questions_title"
        id="featured_questions_title"
      >
        {i18n.t('homepage.featured_questions.title')}
      </HomepageSectionTitleStyle>
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
    </HomepageSectionStyle>
  );
};

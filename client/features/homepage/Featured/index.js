// @flow
import React from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { type HomePostType } from 'Shared/types/views';
import { ConsultationElementSubtitleStyle } from 'Client/features/consultation/Browse/style';
import { i18n } from 'Shared/i18n';
import {
  HomepageSectionTitleStyle,
  HomepageSectionStyle,
} from 'Client/pages/Home/style';
import { BrowsePageInnerStyle } from 'Client/pages/Browse/style';
import { FeaturedQuestions } from './Questions';
import { FeaturedPosts } from './Posts';
import { FeaturedSeparatorStyle } from './Posts/style';

type Props = {
  questions: HomeQuestionType[],
  posts: HomePostType[],
};

export const FeaturedNews = ({ questions, posts }: Props) => (
  <HomepageSectionStyle
    as="section"
    aria-labelledby="featured_questions_title"
    id="featured_questions"
  >
    <BrowsePageInnerStyle>
      <ConsultationElementSubtitleStyle data-cy-container="featured_questions_subtitle">
        {i18n.t('homepage.featured_questions.label')}
      </ConsultationElementSubtitleStyle>
      <HomepageSectionTitleStyle
        data-cy-container="featured_questions_title"
        id="featured_questions_title"
      >
        {i18n.t('homepage.featured_questions.title')}
      </HomepageSectionTitleStyle>
      <FeaturedQuestions questions={questions} />
      <FeaturedSeparatorStyle />
    </BrowsePageInnerStyle>
    <FeaturedPosts posts={posts} />
  </HomepageSectionStyle>
);

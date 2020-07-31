// @flow
import React from 'react';
import { type HomePostType } from 'Shared/types/views';
import { trackClickBlog } from 'Shared/services/Tracking';
import {
  ConsultationsListStyle,
  ConsultationsListItemStyle,
  ConsultationArticleStyle,
  ConsultationElementPictureStyle,
  ConsultationElementTitleStyle,
  ConsultationElementParagraphStyle,
  ConsultationRedLinkElementStyle,
} from 'Client/features/consultation/Browse/style';
import { i18n } from 'Shared/i18n';
import { ABOUT_MAKE_LINK } from 'Shared/constants/url';
import { BrowsePageInnerStyle } from 'Client/pages/Browse/style';
import { FeaturedIconStyle } from './style';
import { CurrentQuestionsButtonStyle } from '../../CurrentQuestions/style';

type Props = {
  posts: HomePostType[],
};

export const FeaturedPosts = ({ posts }: Props) => {
  const noFeaturedPosts = posts.length === 0;

  if (noFeaturedPosts) {
    return null;
  }

  return (
    <>
      <ConsultationsListStyle>
        {posts.map(post => (
          <ConsultationsListItemStyle itemsPerRow={3} key={post.title}>
            <ConsultationArticleStyle>
              <ConsultationElementPictureStyle src={post.picture} alt="" />
              <ConsultationElementTitleStyle>
                {post.title}
              </ConsultationElementTitleStyle>
              <ConsultationElementParagraphStyle>
                {post.description}
              </ConsultationElementParagraphStyle>
              <ConsultationRedLinkElementStyle
                as="a"
                href={post.link}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => trackClickBlog('blog item')}
              >
                {i18n.t('homepage.posts.link_text')}
              </ConsultationRedLinkElementStyle>
            </ConsultationArticleStyle>
          </ConsultationsListItemStyle>
        ))}
      </ConsultationsListStyle>
      <BrowsePageInnerStyle>
        <CurrentQuestionsButtonStyle
          as="a"
          href={ABOUT_MAKE_LINK}
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => trackClickBlog('blog list')}
          data-cy-link="see-blog"
        >
          {i18n.t('homepage.posts.see_all')}
          <FeaturedIconStyle aria-label={i18n.t('common.open_new_window')} />
        </CurrentQuestionsButtonStyle>
      </BrowsePageInnerStyle>
    </>
  );
};

// @flow

import React from 'react';
import { FeaturedArticle } from '../Article';
import { FeaturedArticleWrapperStyle, FeaturedArticleStyle } from '../Styled';
import { type TypeFeaturedsProps } from '../index';

export const DesktopOneColumn = (props: TypeFeaturedsProps) => {
  const { featureds, country, language } = props;
  return (
    <FeaturedArticleWrapperStyle id="featured_list">
      {featureds.map(featured => (
        <FeaturedArticleStyle key={`article_title_${featured.slot}`}>
          <FeaturedArticle
            featured={featured}
            index={featured.slot}
            country={country}
            language={language}
          />
        </FeaturedArticleStyle>
      ))}
    </FeaturedArticleWrapperStyle>
  );
};

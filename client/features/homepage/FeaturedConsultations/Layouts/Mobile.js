// @flow
import React from 'react';
import { FeaturedArticle } from '../Article';
import { FeaturedArticleWrapperStyle, FeaturedArticleStyle } from '../Styled';
import { type TypeFeaturedsProps } from '../index';

export const FeaturedMobile = (props: TypeFeaturedsProps) => {
  const { featureds, country, language } = props;
  return (
    <FeaturedArticleWrapperStyle>
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

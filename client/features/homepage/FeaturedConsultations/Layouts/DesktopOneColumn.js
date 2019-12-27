// @flow

import React from 'react';
import { type TypeFeaturedConsultation } from 'Shared/types/views';
import { FeaturedArticle } from '../Article';
import { FeaturedArticleWrapperStyle, FeaturedArticleStyle } from '../Styled';

type Props = {
  featureds: TypeFeaturedConsultation[],
  country: string,
  language: string,
};

export const DesktopOneColumn = ({ featureds, country, language }: Props) => {
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

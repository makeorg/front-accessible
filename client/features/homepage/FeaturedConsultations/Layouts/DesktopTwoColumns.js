// @flow

import React, { useEffect, useState } from 'react';
import { sortSlotsBySmallest, swapIndexes } from 'Shared/helpers/views';
import { FeaturedArticle } from '../Article';
import {
  FeaturedArticleWrapperStyle,
  FeaturedArticleColumnStyle,
} from '../Styled';
import { type TypeFeaturedsProps } from '../index';

export const DesktopTwoColumns = (props: TypeFeaturedsProps) => {
  const { featureds, country, language } = props;
  let sortedFeatureds = sortSlotsBySmallest(featureds);
  const featuredsLength = featureds.length;
  const halfLengthFloor = Math.floor(featuredsLength / 2);
  const [featuredsFirstColumn, setFirstColumn] = useState([]);
  const [featuredsSecondColumn, setSecondColumn] = useState([]);
  const [firstColumnWithOneElement, setLonelyFirstElement] = useState(false);
  const [secondColumnWithOneElement, setLonelySecondElement] = useState(false);

  useEffect(() => {
    if (featuredsLength === 2) {
      setLonelyFirstElement(true);
      setLonelySecondElement(true);
    }
    if (featuredsLength === 3) {
      setLonelyFirstElement(true);
    }
    if (featuredsLength === 4) {
      sortedFeatureds = swapIndexes(sortedFeatureds);
    }
    setFirstColumn(sortedFeatureds.slice(0, halfLengthFloor));
    setSecondColumn(sortedFeatureds.slice(halfLengthFloor, featuredsLength));
  }, []);

  return (
    <FeaturedArticleWrapperStyle id="featured_list">
      <FeaturedArticleColumnStyle>
        {featuredsFirstColumn.map(featured => (
          <FeaturedArticle
            key={`article_title_${featured.slot}`}
            featured={featured}
            index={featured.slot}
            country={country}
            language={language}
            isAlone={firstColumnWithOneElement}
          />
        ))}
      </FeaturedArticleColumnStyle>
      <FeaturedArticleColumnStyle>
        {featuredsSecondColumn.map(featured => (
          <FeaturedArticle
            key={`article_title_${featured.slot}`}
            featured={featured}
            index={featured.slot}
            country={country}
            language={language}
            isAlone={secondColumnWithOneElement}
          />
        ))}
      </FeaturedArticleColumnStyle>
    </FeaturedArticleWrapperStyle>
  );
};

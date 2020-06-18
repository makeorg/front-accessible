// @flow

import React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type FeaturedConsultationType } from 'Shared/types/views';
import { type StateRoot } from 'Shared/store/types';
import { useTablet } from 'Client/hooks/useMedia';
import {
  HomepageInnerContentStyle,
  HomeTitleStyle,
} from 'Client/pages/DeprecatedHome/Styled';
import { DesktopOneColumn } from './Layouts/DesktopOneColumn';
import { DesktopTwoColumns } from './Layouts/DesktopTwoColumns';
import { FeaturedMobile } from './Layouts/Mobile';

export type TypeFeaturedsProps = {
  featureds: FeaturedConsultationType[],
};

export const FeaturedConsultations = ({ featureds }: TypeFeaturedsProps) => {
  const isTablet = useTablet();
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  if (featureds.length === 0) {
    return null;
  }

  return (
    <HomepageInnerContentStyle aria-labelledby="featured_title">
      <HomeTitleStyle id="featured_title">
        {i18n.t('homepage.featured.title')}
      </HomeTitleStyle>
      {isTablet ? (
        <FeaturedDesktop
          featureds={featureds}
          country={country}
          language={language}
        />
      ) : (
        <FeaturedMobile
          featureds={featureds}
          country={country}
          language={language}
        />
      )}
    </HomepageInnerContentStyle>
  );
};

type FeaturedDesktopProps = {
  featureds: FeaturedConsultationType[],
  country: string,
  language: string,
};

const FeaturedDesktop = ({
  featureds,
  country,
  language,
}: FeaturedDesktopProps) => {
  if (featureds.length === 1) {
    return (
      <DesktopOneColumn
        featureds={featureds}
        country={country}
        language={language}
      />
    );
  }

  return (
    <DesktopTwoColumns
      featureds={featureds}
      country={country}
      language={language}
    />
  );
};

// @flow

import React from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type TypeFeaturedConsultation } from 'Shared/types/views';
import { useDesktop } from 'Client/hooks/useMedia';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { HomepageInnerContentStyle } from 'Client/pages/Home/Styled';
import { DesktopOneColumn } from './Layouts/DesktopOneColumn';
import { DesktopTwoColumns } from './Layouts/DesktopTwoColumns';
import { FeaturedMobile } from './Layouts/Mobile';

export type TypeFeaturedsProps = {
  featureds: TypeFeaturedConsultation[],
  country: string,
  language: string,
};

const FeaturedConsultationsComponent = (props: TypeFeaturedsProps) => {
  const { featureds, country, language } = props;
  const isDesktop = useDesktop();

  if (featureds.length <= 0) {
    return null;
  }

  return (
    <HomepageInnerContentStyle aria-labelledby="featured_title">
      <HomeTitleStyle id="featured_title">
        {i18n.t('homepage.featured.title')}
      </HomeTitleStyle>
      {isDesktop ? (
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

const FeaturedDesktop = (props: TypeFeaturedsProps) => {
  const { featureds, country, language } = props;
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

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const FeaturedConsultations = connect(mapStateToProps)(
  FeaturedConsultationsComponent
);

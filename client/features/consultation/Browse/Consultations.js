// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import {
  type BreadcrumbsPagesType,
  Breadcrumbs,
} from 'Client/app/Breadcrumbs/Breadcrumbs';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { HomepageSectionTitleStyle } from 'Client/pages/Home/style';
import {
  ConsultationElementStyle,
  ConsultationElementPictureStyle,
  ConsultationElementSubtitleStyle,
  ConsultationElementTitleStyle,
  ConsultationElementDateWrapperStyle,
  ConsultationElementDateStyle,
  ConsultationRedLinkElementStyle,
  BrowseBannerWrapperStyle,
  BrowseBannerTitleStyle,
  ConsultationsTitleWrapperStyle,
  ConsultationsSubtitleStyle,
  BrowseNavListStyle,
  BrowseNavItemStyle,
  BrowseNavLinkStyle,
  ClockIconStyle,
} from './style';

export const BrowseConsultations = () => {
  // @to do: add getHomePageLink function in shared/helpers/url
  const parentPages: BreadcrumbsPagesType = [
    {
      name: i18n.t('homepage.title'),
      // link: '/',
    },
  ];

  const currentPage = {
    name: i18n.t('browse_consultations.title'),
    // link: '/',
  };

  return (
    <>
      <BrowseBannerWrapperStyle>
        <Breadcrumbs parentPages={parentPages} currentPage={currentPage} />
        <BrowseBannerTitleStyle>
          {i18n.t('browse_consultations.title')}
        </BrowseBannerTitleStyle>
        <BrowseNavListStyle>
          <BrowseNavItemStyle>
            <BrowseNavLinkStyle isSelected>
              {i18n.t('browse_consultations.nav_consultations')}
            </BrowseNavLinkStyle>
          </BrowseNavItemStyle>
          <BrowseNavItemStyle>
            <BrowseNavLinkStyle isSelected={false}>
              {i18n.t('browse_consultations.nav_results')}
            </BrowseNavLinkStyle>
          </BrowseNavItemStyle>
        </BrowseNavListStyle>
      </BrowseBannerWrapperStyle>
      <ConsultationsTitleWrapperStyle>
        <HomepageSectionTitleStyle>
          {i18n.t('browse_consultations.current.title')}
        </HomepageSectionTitleStyle>
        <ConsultationsSubtitleStyle>
          {i18n.t('browse_consultations.current.subtitle')}
        </ConsultationsSubtitleStyle>
      </ConsultationsTitleWrapperStyle>
      <ColumnElementStyle>
        {/* todo: when endpoint is created, map on data to build <BrowseElement/> */}
        <ConsultationElementStyle>
          <ConsultationElementPictureStyle />
          <ConsultationElementSubtitleStyle>
            Grande Cause Make.org
          </ConsultationElementSubtitleStyle>
          <ConsultationElementTitleStyle>
            Comment agir ensemble dès maintenant pour l&apos;environnement ?
          </ConsultationElementTitleStyle>
          <ConsultationElementDateWrapperStyle>
            <ClockIconStyle />
            <ConsultationElementDateStyle>
              {i18n.t('browse_consultations.date')}
            </ConsultationElementDateStyle>
          </ConsultationElementDateWrapperStyle>
          <ConsultationRedLinkElementStyle>
            {i18n.t('browse_consultations.current.participate')}
          </ConsultationRedLinkElementStyle>
        </ConsultationElementStyle>
      </ColumnElementStyle>
    </>
  );
};

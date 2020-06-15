// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import {
  type BreadcrumbsPagesType,
  Breadcrumbs,
} from 'Client/app/Breadcrumbs/Breadcrumbs';
import {
  ConsultationsWrapperStyle,
  ConsultationElementStyle,
  ConsultationElementPicture,
  ConsultationElementSubtitle,
  ConsultationElementQuestion,
  ConsultationElementDateWrapper,
  ConsultationElementDateStyle,
  ConsultationRedLinkElementStyle,
  BrowseBannerWrapperStyle,
  BrowseBannerTitleStyle,
  ConsultationsTitleWrapperStyle,
  ConsultationsTitleStyle,
  ConsultationsSubtitleStyle,
  BrowseNavListStyle,
  BrowseNavItemStyle,
  BrowseNavLinkStyle,
  BrowseClockIconStyle,
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
        <ConsultationsTitleStyle>
          {i18n.t('browse_consultations.current.title')}
        </ConsultationsTitleStyle>
        <ConsultationsSubtitleStyle>
          {i18n.t('browse_consultations.current.subtitle')}
        </ConsultationsSubtitleStyle>
      </ConsultationsTitleWrapperStyle>
      <ConsultationsWrapperStyle>
        {/* todo: when endpoint is created, map on data to build <BrowseElement/> */}
        <ConsultationElementStyle>
          <ConsultationElementPicture />
          <ConsultationElementSubtitle>
            Grande Cause Make.org
          </ConsultationElementSubtitle>
          <ConsultationElementQuestion>
            Comment agir ensemble dès maintenant pour l&apos;environnement ?
          </ConsultationElementQuestion>
          <ConsultationElementDateWrapper>
            <BrowseClockIconStyle />
            <ConsultationElementDateStyle>
              {i18n.t('browse_consultations.date')}
            </ConsultationElementDateStyle>
          </ConsultationElementDateWrapper>
          <ConsultationRedLinkElementStyle>
            {i18n.t('browse_consultations.current.participate')}
          </ConsultationRedLinkElementStyle>
        </ConsultationElementStyle>
      </ConsultationsWrapperStyle>
    </>
  );
};

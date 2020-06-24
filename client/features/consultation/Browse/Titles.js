// #flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { HomepageSectionTitleStyle } from 'Client/pages/Home/style';
import { isBrowseConsultationsPage } from 'Shared/routes';
import { useLocation } from 'react-router';
import {
  ConsultationsTitleWrapperStyle,
  ConsultationsSubtitleStyle,
  ConsultationElementSubtitleStyle,
} from './style';

export const BrowseConsultationsTitles = () => {
  const location = useLocation();
  const consultationsPage = isBrowseConsultationsPage(location.pathname);
  return (
    <ConsultationsTitleWrapperStyle>
      <ConsultationElementSubtitleStyle>
        {consultationsPage
          ? i18n.t('browse.consultations.label')
          : i18n.t('browse.results.label')}
      </ConsultationElementSubtitleStyle>
      <HomepageSectionTitleStyle id="browse_title">
        {consultationsPage
          ? i18n.t('browse.consultations.title')
          : i18n.t('browse.results.title')}
      </HomepageSectionTitleStyle>
      <ConsultationsSubtitleStyle>
        {consultationsPage
          ? i18n.t('browse.consultations.subtitle')
          : i18n.t('browse.results.subtitle')}
      </ConsultationsSubtitleStyle>
    </ConsultationsTitleWrapperStyle>
  );
};

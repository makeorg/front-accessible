// @flow
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { SvgAngleArrowLeft } from 'Client/ui/Svg/elements';
import { Tracking } from 'Shared/services/Tracking';
import {
  SearchPageTitleStyle,
  SearchPageWrapperStyle,
  SearchPageContentStyle,
  SearchPageResultsStyle,
  SearchBackStyle,
  SearchBackArrowStyle,
} from '../Styled';
import { SearchSidebar } from '../Sidebar';

export const SearchConsultations = () => {
  useEffect(() => {
    Tracking.trackDisplaySearchConsultationsResult();
  }, []);
  return (
    <React.Fragment>
      {/* @Todo add result count and term in translation */}
      <MetaTags title={i18n.t('meta.search.consultations')} />
      <SearchPageWrapperStyle>
        {/* @Todo add Link Path to main results page */}
        <SearchBackStyle as={Link}>
          <SvgAngleArrowLeft style={SearchBackArrowStyle} aria-hidden />
          {i18n.t('common.back')}
        </SearchBackStyle>
        <SearchPageTitleStyle>
          {/* @Todo add result count and term in translation */}
          {i18n.t('search.titles.consultations')}
        </SearchPageTitleStyle>
        <SearchPageContentStyle>
          <SearchPageResultsStyle>Results content</SearchPageResultsStyle>
          <SearchSidebar />
        </SearchPageContentStyle>
      </SearchPageWrapperStyle>
    </React.Fragment>
  );
};

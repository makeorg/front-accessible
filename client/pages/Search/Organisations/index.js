// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { SvgAngleArrowLeft } from 'Client/ui/Svg/elements';
import {
  SearchPageTitleStyle,
  SearchPageWrapperStyle,
  SearchPageContentStyle,
  SearchPageResultsStyle,
  SearchPageSidebarStyle,
  SearchBackStyle,
  SearchBackArrowStyle,
} from '../Styled';

export const SearchOrganisations = () => (
  <React.Fragment>
    {/* @Todo add result count and term in translation */}
    <MetaTags title={i18n.t('meta.search.organisations')} />
    <SearchPageWrapperStyle>
      {/* @Todo add Link Path to main results page */}
      <SearchBackStyle as={Link}>
        <SvgAngleArrowLeft style={SearchBackArrowStyle} aria-hidden />
        {i18n.t('common.back')}
      </SearchBackStyle>
      <SearchPageTitleStyle>
        {/* @Todo add result count and term in translation */}
        {i18n.t('search.titles.organisations')}
      </SearchPageTitleStyle>
      <SearchPageContentStyle>
        <SearchPageResultsStyle>Results content</SearchPageResultsStyle>
        <SearchPageSidebarStyle>Sidebar content</SearchPageSidebarStyle>
      </SearchPageContentStyle>
    </SearchPageWrapperStyle>
  </React.Fragment>
);

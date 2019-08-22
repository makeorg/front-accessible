// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import {
  SearchPageTitleStyle,
  SearchMainResultsWrapperStyle,
  SearchPageContentStyle,
  SearchPageResultsStyle,
  SearchPageSidebarStyle,
} from '../Styled';

export const SearchMainResults = () => (
  <React.Fragment>
    {/* @Todo add result count and term in translation */}
    <MetaTags title={i18n.t('meta.search.main_results')} />
    <SearchMainResultsWrapperStyle>
      <SearchPageTitleStyle>
        {/* @Todo add result count and term in translation */}
        {i18n.t('search.titles.main_results')}
      </SearchPageTitleStyle>
      <SearchPageContentStyle>
        <SearchPageResultsStyle>Results content</SearchPageResultsStyle>
        <SearchPageSidebarStyle>Sidebar content</SearchPageSidebarStyle>
      </SearchPageContentStyle>
    </SearchMainResultsWrapperStyle>
  </React.Fragment>
);

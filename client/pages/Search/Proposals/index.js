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
  SearchBackStyle,
  SearchBackArrowStyle,
} from '../Styled';
import { SearchSidebar } from '../Sidebar';

export const SearchProposals = () => (
  <React.Fragment>
    {/* @Todo add result count and term in translation */}
    <MetaTags title={i18n.t('meta.search.proposals')} />
    <SearchPageWrapperStyle>
      {/* @Todo add Link Path to main results page */}
      <SearchBackStyle as={Link}>
        <SvgAngleArrowLeft style={SearchBackArrowStyle} aria-hidden />
        {i18n.t('common.back')}
      </SearchBackStyle>
      <SearchPageTitleStyle>
        {/* @Todo add result count and term in translation */}
        {i18n.t('search.titles.proposals')}
      </SearchPageTitleStyle>
      <SearchPageContentStyle>
        <SearchPageResultsStyle>Results content</SearchPageResultsStyle>
        <SearchSidebar />
      </SearchPageContentStyle>
    </SearchPageWrapperStyle>
  </React.Fragment>
);

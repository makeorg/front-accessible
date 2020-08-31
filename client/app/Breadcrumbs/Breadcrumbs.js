// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import { getHomeLink } from 'Shared/helpers/url';
import { type StateRoot } from 'Shared/store/types';
import {
  BrowseBreadcrumbWrapperStyle,
  BrowseBannerBreadcrumbListStyle,
  BrowseBreadcrumbsLinkStyle,
  BrowseArrowIconStyle,
  BrowseHomeIconStyle,
} from './style';

export type BreadcrumbsPagesType = {
  name: string,
  link: string,
};

type Props = {
  /** Array with parentPages object (name: string, link: string) */
  parentPages?: BreadcrumbsPagesType[],
  /** The currentPage object (name: string, link: string) */
  currentPage: BreadcrumbsPagesType,
};

export const Breadcrumbs = ({ parentPages, currentPage }: Props) => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  return (
    <nav aria-label={i18n.t('common.breadcrumbs')}>
      <BrowseBreadcrumbWrapperStyle as="ol">
        <BrowseBannerBreadcrumbListStyle>
          <BrowseHomeIconStyle aria-hidden />
          <BrowseBreadcrumbsLinkStyle to={getHomeLink(country, language)}>
            {i18n.t('homepage.title')}
          </BrowseBreadcrumbsLinkStyle>
          <BrowseArrowIconStyle aria-hidden />
        </BrowseBannerBreadcrumbListStyle>
        {parentPages &&
          parentPages.map(parentPage => (
            <BrowseBannerBreadcrumbListStyle key={parentPage.link}>
              <BrowseBreadcrumbsLinkStyle to={parentPage.link}>
                {parentPage.name}
              </BrowseBreadcrumbsLinkStyle>
              <BrowseArrowIconStyle aria-hidden />
            </BrowseBannerBreadcrumbListStyle>
          ))}
        <BrowseBannerBreadcrumbListStyle className="selected">
          <BrowseBreadcrumbsLinkStyle aria-current="page" to={currentPage.link}>
            {currentPage.name}
          </BrowseBreadcrumbsLinkStyle>
        </BrowseBannerBreadcrumbListStyle>
      </BrowseBreadcrumbWrapperStyle>
    </nav>
  );
};

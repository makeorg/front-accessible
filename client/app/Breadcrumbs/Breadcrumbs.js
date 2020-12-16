// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import { getHomeLink } from 'Shared/helpers/url';
import { type StateRoot } from 'Shared/store/types';
import {
  BreadcrumbsWrapperStyle,
  BreadcrumbsListStyle,
  BreadcrumbsLinkStyle,
  ArrowIconStyle,
  HomeIconStyle,
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
  const { country } = useSelector((state: StateRoot) => state.appConfig);

  return (
    <nav aria-label={i18n.t('common.breadcrumbs')}>
      <BreadcrumbsWrapperStyle as="ol">
        <BreadcrumbsListStyle>
          <HomeIconStyle aria-hidden focusable="false" />
          <BreadcrumbsLinkStyle to={getHomeLink(country)}>
            {i18n.t('homepage.title')}
          </BreadcrumbsLinkStyle>
          <ArrowIconStyle aria-hidden focusable="false" />
        </BreadcrumbsListStyle>
        {parentPages &&
          parentPages.map(parentPage => (
            <BreadcrumbsListStyle key={parentPage.link}>
              <BreadcrumbsLinkStyle to={parentPage.link}>
                {parentPage.name}
              </BreadcrumbsLinkStyle>
              <ArrowIconStyle aria-hidden focusable="false" />
            </BreadcrumbsListStyle>
          ))}
        <BreadcrumbsListStyle className="selected">
          <BreadcrumbsLinkStyle aria-current="page" to={currentPage.link}>
            {currentPage.name}
          </BreadcrumbsLinkStyle>
        </BreadcrumbsListStyle>
      </BreadcrumbsWrapperStyle>
    </nav>
  );
};

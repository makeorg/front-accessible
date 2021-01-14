// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import { getHomeLink } from 'Shared/helpers/url';
import { type StateRoot } from 'Shared/store/types';
import { trackClickBreadcrumbs } from 'Shared/services/Tracking';
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
  const initialIndex = 1;
  const indexOffset = initialIndex + 1;

  return (
    <nav aria-label={i18n.t('common.breadcrumbs')}>
      <BreadcrumbsWrapperStyle as="ol">
        <BreadcrumbsListStyle>
          <HomeIconStyle aria-hidden focusable="false" />
          <BreadcrumbsLinkStyle
            to={getHomeLink(country)}
            onClick={() => trackClickBreadcrumbs(initialIndex)}
          >
            {i18n.t('homepage.title')}
          </BreadcrumbsLinkStyle>
          <ArrowIconStyle aria-hidden focusable="false" />
        </BreadcrumbsListStyle>
        {parentPages &&
          parentPages.map((parentPage, index) => (
            <BreadcrumbsListStyle key={parentPage.link}>
              <BreadcrumbsLinkStyle
                to={parentPage.link}
                onClick={() => trackClickBreadcrumbs(index + indexOffset)}
              >
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

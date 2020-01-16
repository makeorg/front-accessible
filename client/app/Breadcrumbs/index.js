import React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';
import {
  BreadcrumbsListItemStyle,
  BreadcrumbsListStyle,
  BreadcrumbsSeparatorIconStyle,
  BreadcrumbsLinkStyle,
} from './style';

export type BreadcrumbsPagesType = {
  name: string,
  link: string,
};

type Props = {
  /** Array with parentPages object (name: string, link: string) */
  parentPages: BreadcrumbsPagesType[],
  /** Name of the current page */
  currentPage: BreadcrumbsPagesType,
};

export const Breadcrumbs = ({ parentPages, currentPage }: Props) => (
  <nav aria-label={i18n.t('common.breadcrumbs')}>
    <BreadcrumbsListStyle as="ol">
      {parentPages.map(parentPage => (
        <BreadcrumbsListItemStyle key={parentPage.link}>
          <BreadcrumbsLinkStyle to={parentPage.link}>
            {parentPage.name}
          </BreadcrumbsLinkStyle>
          <SvgAngleArrowRight
            style={BreadcrumbsSeparatorIconStyle}
            aria-hidden
          />
        </BreadcrumbsListItemStyle>
      ))}
      <BreadcrumbsListItemStyle className="selected">
        <BreadcrumbsLinkStyle aria-current="page" to={currentPage.link}>
          {currentPage.name}
        </BreadcrumbsLinkStyle>
      </BreadcrumbsListItemStyle>
    </BreadcrumbsListStyle>
  </nav>
);

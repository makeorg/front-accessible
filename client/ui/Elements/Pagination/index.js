// @flow
import React from 'react';
import { useDesktop } from 'Client/hooks/useMedia';
import { i18n } from 'Shared/i18n';
import { SvgPreviousArrow, SvgNextArrow } from 'Client/ui/Svg/elements';
import {
  PaginationWrapperStyle,
  PaginationTextStyle,
  PaginationButtonStyle,
  DesktopStyle,
  MobileStyle,
} from './style';

export const Pagination = () => {
  // add aria-current="page" to the link that points to the current page
  // add aria-disabled="true" to the link when it is disabled

  const isDesktop = useDesktop();

  return (
    <PaginationWrapperStyle aria-label={i18n.t('common.pagination.title')}>
      <PaginationButtonStyle
        type="button"
        aria-label={i18n.t('common.pagination.previous')}
        disabled
      >
        <SvgPreviousArrow style={isDesktop ? DesktopStyle : MobileStyle} />
      </PaginationButtonStyle>
      <PaginationTextStyle>
        {i18n.t('common.pagination.page')}
        {i18n.t('common.pagination.from')}
      </PaginationTextStyle>
      <PaginationButtonStyle
        type="button"
        aria-label={i18n.t('common.pagination.next')}
      >
        <SvgNextArrow style={isDesktop ? DesktopStyle : MobileStyle} />
      </PaginationButtonStyle>
    </PaginationWrapperStyle>
  );
};

// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { getPaginatedRoute } from 'Shared/routes';
import { scrollToTop } from 'Shared/helpers/styled';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import {
  PaginationNavStyle,
  PaginationTextStyle,
  PaginationButtonStyle,
  PreviousArrowStyle,
  NextArrowStyle,
} from './style';

type Props = {
  itemsPerPage: number,
  itemsTotal: number,
};

export const Pagination = ({ itemsPerPage, itemsTotal }: Props) => {
  const history = useHistory();
  const params = useParams();
  const match = useRouteMatch();
  const { country, language, pageId } = params;
  const intPageId = parseInt(pageId, 10);
  const pagesTotal = Math.ceil(itemsTotal / itemsPerPage);

  const incrementPagination = () => {
    // add tracking
    scrollToTop();
    return history.push(
      getPaginatedRoute(match.path, country, language, intPageId + 1)
    );
  };

  const decrementPagination = () => {
    // add tracking
    scrollToTop();
    return history.push(
      getPaginatedRoute(match.path, country, language, intPageId - 1)
    );
  };

  return (
    <PaginationNavStyle aria-label={i18n.t('common.pagination.title')}>
      <PaginationButtonStyle
        type="button"
        aria-label={i18n.t('common.pagination.previous')}
        onClick={decrementPagination}
        disabled={intPageId === 1}
      >
        <PreviousArrowStyle aria-hidden />
      </PaginationButtonStyle>
      <PaginationTextStyle>
        {i18n.t('common.pagination.index_count', {
          index: intPageId,
          total: pagesTotal,
        })}
      </PaginationTextStyle>
      <PaginationButtonStyle
        type="button"
        aria-label={i18n.t('common.pagination.next')}
        onClick={incrementPagination}
        disabled={intPageId === pagesTotal}
      >
        <NextArrowStyle aria-hidden />
      </PaginationButtonStyle>
    </PaginationNavStyle>
  );
};

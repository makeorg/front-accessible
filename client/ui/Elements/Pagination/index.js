// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { getPaginatedRoute } from 'Shared/routes';
import { trackClickPageNumber } from 'Shared/services/Tracking';
import { useParams, useRouteMatch } from 'react-router';
import { scrollToElementId, scrollToTop } from 'Shared/helpers/styled';
import {
  PaginationNavStyle,
  PaginationTextStyle,
  PaginationLinkStyle,
  PreviousArrowStyle,
  NextArrowStyle,
  PaginationDisabledStyle,
} from './style';

type Props = {
  itemsPerPage: number,
  itemsTotal: number,
  scrollToId?: string,
  questionSlug?: string,
};

export const Pagination = ({
  itemsPerPage,
  itemsTotal,
  scrollToId,
  questionSlug,
}: Props) => {
  const { country, pageId } = useParams();
  const { path } = useRouteMatch();
  const intPageId = parseInt(pageId, 10);
  const pagesTotal = Math.ceil(itemsTotal / itemsPerPage);
  const previousPageUrl = getPaginatedRoute(
    path,
    country,
    intPageId - 1,
    questionSlug
  );
  const nextPageUrl = getPaginatedRoute(
    path,
    country,
    intPageId + 1,
    questionSlug
  );

  const paginateClick = () => {
    trackClickPageNumber(intPageId);

    if (scrollToId) {
      return scrollToElementId(scrollToId);
    }

    return scrollToTop();
  };

  return (
    <PaginationNavStyle
      aria-label={i18n.t('common.pagination.title')}
      data-cy-container="pagination"
    >
      {intPageId === 1 ? (
        <PaginationDisabledStyle>
          <PreviousArrowStyle aria-hidden focusable="false" />
        </PaginationDisabledStyle>
      ) : (
        <PaginationLinkStyle
          aria-label={i18n.t('common.pagination.previous')}
          onClick={paginateClick}
          data-cy-link="pagination-previous"
          to={previousPageUrl}
        >
          <PreviousArrowStyle aria-hidden focusable="false" />
        </PaginationLinkStyle>
      )}
      <PaginationTextStyle>
        {i18n.t('common.pagination.index_count', {
          index: intPageId,
          total: pagesTotal,
        })}
      </PaginationTextStyle>
      {intPageId === pagesTotal ? (
        <PaginationDisabledStyle>
          <NextArrowStyle aria-hidden focusable="false" />
        </PaginationDisabledStyle>
      ) : (
        <PaginationLinkStyle
          aria-label={i18n.t('common.pagination.next')}
          onClick={paginateClick}
          data-cy-link="pagination-next"
          to={nextPageUrl}
        >
          <NextArrowStyle aria-hidden focusable="false" />
        </PaginationLinkStyle>
      )}
    </PaginationNavStyle>
  );
};

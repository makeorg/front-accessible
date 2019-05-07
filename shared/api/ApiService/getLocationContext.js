// @flow
import {
  ROUTE_CONSULTATION,
  ROUTE_SEQUENCE,
  ROUTE_PROPOSAL,
  matchRoute,
  ROUTE_ACTION,
} from 'Shared/routes';

export const getLocationContext = (
  pathname: string,
  questionId: string,
  proposalId: string
): string => {
  // TODO: missing pages
  // "homepage"
  // "search_results"
  switch (true) {
    case matchRoute(pathname, ROUTE_CONSULTATION):
      return `page-operation ${questionId}`;
    case matchRoute(pathname, ROUTE_SEQUENCE):
      return `sequence ${questionId}`;
    case matchRoute(pathname, ROUTE_PROPOSAL):
      return `proposal-page ${proposalId}`;
    default:
      return `unknown-location ${pathname}`;
  }
};

export const getTrackingLocation = (pathname: string): string => {
  // @TODO: missing pages
  // "homepage"
  // "organisation_page"
  // "search_results"
  switch (true) {
    case matchRoute(pathname, ROUTE_CONSULTATION):
      return `page-operation`;
    case matchRoute(pathname, ROUTE_ACTION):
      return `page-action`;
    case matchRoute(pathname, ROUTE_SEQUENCE):
      return `sequence`;
    case matchRoute(pathname, ROUTE_PROPOSAL):
      return `proposal-page`;
    default:
      return `unknown-location ${pathname}`;
  }
};

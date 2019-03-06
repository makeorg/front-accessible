/* @flow */
import {
  ROUTE_CONSULTATION,
  ROUTE_SEQUENCE,
  ROUTE_PROPOSAL,
  matchRoute,
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
      return `question_page ${questionId}`;
    case matchRoute(pathname, ROUTE_SEQUENCE):
      return `sequence ${questionId}`;
    case matchRoute(pathname, ROUTE_PROPOSAL):
      return `proposal_page ${proposalId}`;
    default:
      return `unknown_location ${pathname}`;
  }
};

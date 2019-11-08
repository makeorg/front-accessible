// @flow

import {
  ROUTE_CONSULTATION,
  ROUTE_SEQUENCE,
  ROUTE_PROPOSAL,
  matchRoute,
  ROUTE_ACTION,
  ROUTE_SEARCH,
  ROUTE_SEARCH_PROPOSALS,
  ROUTE_SEARCH_ORGANISATIONS,
  ROUTE_SEARCH_CONSULTATIONS,
} from 'Shared/routes';

export const getLocationContext = (
  pathname: string,
  questionId: string,
  proposalId: string
): string => {
  const path = pathname.toLowerCase();

  const locations = [
    { route: ROUTE_CONSULTATION, name: `page-operation ${questionId}` },
    { route: ROUTE_ACTION, name: `page-action ${questionId}` },
    { route: ROUTE_SEQUENCE, name: `sequence ${questionId}` },
    { route: ROUTE_PROPOSAL, name: `proposal-page ${proposalId}` },
    { route: ROUTE_SEARCH_PROPOSALS, name: `search-proposals-page` },
    { route: ROUTE_SEARCH_ORGANISATIONS, name: `search-organisations-page` },
    { route: ROUTE_SEARCH_CONSULTATIONS, name: `search-consultations-page` },
    { route: ROUTE_SEARCH, name: `search-page` },
    { route: '/', name: `homepage`, exact: true, strict: true },
    { route: '/:countryLang', name: `homepage`, exact: true, strict: false },
  ];

  const location = locations.find(item => {
    return matchRoute(
      path,
      item.route,
      item.exact ? item.exact : false,
      item.strict ? item.strict : false
    );
  });

  return location === undefined
    ? `unknown-location ${pathname}`
    : location.name;
};

export const getTrackingLocation = (pathname: string): string => {
  const location = getLocationContext(pathname, '', '');

  return location.split(' ').shift();
};

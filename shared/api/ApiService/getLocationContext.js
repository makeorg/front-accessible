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
  ROUTE_PERSONALITY_PROFILE,
  ROUTE_ORGANISATION_PROFILE,
  ROUTE_PROFILE_EDIT,
  ROUTE_PROFILE_FAVOURITES,
  ROUTE_PROFILE_PROPOSALS,
  ROUTE_PROFILE_FOLLOWING,
  ROUTE_RESULTS,
  ROUTE_IDEAS,
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
    { route: ROUTE_RESULTS, name: `page-results ${questionId}` },
    { route: ROUTE_IDEAS, name: `page-ideas ${questionId}` },
    { route: ROUTE_SEQUENCE, name: `sequence ${questionId}` },
    { route: ROUTE_PROPOSAL, name: `proposal-page ${proposalId}` },
    { route: ROUTE_SEARCH_PROPOSALS, name: `search-proposals-page` },
    { route: ROUTE_SEARCH_ORGANISATIONS, name: `search-organisations-page` },
    { route: ROUTE_SEARCH_CONSULTATIONS, name: `search-consultations-page` },
    { route: ROUTE_SEARCH, name: `search-page` },
    { route: ROUTE_PROFILE_EDIT, name: `private-profile-page` },
    {
      route: ROUTE_PROFILE_FAVOURITES,
      name: `private-profile-page`,
      exact: true,
      strict: true,
    },
    {
      route: ROUTE_PROFILE_PROPOSALS,
      name: `private-profile-page`,
      exact: true,
      strict: true,
    },
    {
      route: ROUTE_PROFILE_FOLLOWING,
      name: `private-profile-page`,
      exact: true,
      strict: true,
    },
    {
      route: ROUTE_ORGANISATION_PROFILE,
      name: `public-profile-page`,
    },
    {
      route: ROUTE_PERSONALITY_PROFILE,
      name: `public-profile-page`,
    },
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

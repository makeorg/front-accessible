/* @flow */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  ROUTE_SEARCH,
  ROUTE_SEARCH_PROPOSALS,
  ROUTE_SEARCH_ORGANISATIONS,
  ROUTE_SEARCH_CONSULTATIONS,
} from 'Shared/routes';
import { SearchMainResults } from './MainResults';
import { SearchProposals } from './Proposals';
import { SearchOrganisations } from './Organisations';
import { SearchConsultations } from './Consultations';

export const SearchPage = () => (
  <Switch>
    <Route path={ROUTE_SEARCH} exact component={SearchMainResults} />
    <Route path={ROUTE_SEARCH_PROPOSALS} exact component={SearchProposals} />
    <Route
      path={ROUTE_SEARCH_ORGANISATIONS}
      exact
      component={SearchOrganisations}
    />
    <Route
      path={ROUTE_SEARCH_CONSULTATIONS}
      exact
      component={SearchConsultations}
    />
  </Switch>
);

// default export needed for loadable component
export default SearchPage; // eslint-disable-line import/no-default-export

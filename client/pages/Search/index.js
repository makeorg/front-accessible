/* @flow */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import {
  ROUTE_SEARCH,
  ROUTE_SEARCH_PROPOSALS,
  ROUTE_SEARCH_ORGANISATIONS,
  ROUTE_SEARCH_CONSULTATIONS,
} from 'Shared/routes';

const SearchComponent = () => (
  <>
    <MetaTags title={i18n.t('search.title')} />
    <h1>Global Search</h1>
  </>
);
const SearchProposalsComponent = () => (
  <>
    <MetaTags title={i18n.t('search.proposals.title')} />
    <h1>Proposals Search</h1>
  </>
);

const SearchOrgaisationsComponent = () => (
  <>
    <MetaTags title={i18n.t('search.oragnisations.title')} />
    <h1>Oragnisations Search</h1>
  </>
);

const SearchConsultationsComponent = () => (
  <>
    <MetaTags title={i18n.t('search.consultations.title')} />
    <h1>Consultations Search</h1>
  </>
);

export const SearchPage = () => (
  <Switch>
    <Route path={ROUTE_SEARCH} exact component={SearchComponent} />
    <Route
      path={ROUTE_SEARCH_PROPOSALS}
      exact
      component={SearchProposalsComponent}
    />
    <Route
      path={ROUTE_SEARCH_ORGANISATIONS}
      exact
      component={SearchOrgaisationsComponent}
    />
    <Route
      path={ROUTE_SEARCH_CONSULTATIONS}
      exact
      component={SearchConsultationsComponent}
    />
  </Switch>
);

// default export needed for loadable component
export default SearchPage; // eslint-disable-line import/no-default-export

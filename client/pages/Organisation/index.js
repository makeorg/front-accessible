// @flow
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as OrganisationService from 'Shared/services/Organisation';
import {
  matchPath,
  type match as TypeMatch,
  type Location as TypeLocation,
} from 'react-router';
import loadable from '@loadable/component';
import { i18n } from 'Shared/i18n';
import { type Organisation as TypeOrganisation } from 'Shared/types/partners';
import { MetaTags } from 'Client/app/MetaTags';
import { TabNavStyle, TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import {
  ROUTE_ORGANISATION_PROPOSALS,
  ROUTE_ORGANISATION_VOTES,
  getRouteOrganisationProposals,
  getRouteOrganisationVotes,
} from 'Shared/routes';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
} from 'Client/ui/Elements/ProfileElements';

const OrganisationProposalsPage = loadable(() =>
  import('Client/pages/Organisation/Proposals')
);
const OrganisationVotesPage = loadable(() =>
  import('Client/pages/Organisation/Votes')
);

type Props = {
  match: TypeMatch,
  location: TypeLocation,
};

type State = {
  organisation: ?TypeOrganisation,
};

class OrganisationPage extends React.Component<Props, State> {
  state = {
    organisation: undefined,
  };

  componentDidMount() {
    this.loadOrganisation();
  }

  loadOrganisation = async () => {
    const { match } = this.props;
    const { organisationSlug } = match.params;

    const organisation = await OrganisationService.getOrganisationBySlug(
      organisationSlug
    );

    this.setState({
      organisation,
    });
  };

  render() {
    const { match, location } = this.props;
    const { countryLanguage, organisationSlug } = match.params;
    const { organisation } = this.state;

    const organisationProposalsLink = getRouteOrganisationProposals(
      countryLanguage,
      organisationSlug
    );
    const organisationFavouritesLink = getRouteOrganisationVotes(
      countryLanguage,
      organisationSlug
    );

    const isOrganisationProposalsActive = !!matchPath(
      location.pathname,
      ROUTE_ORGANISATION_PROPOSALS
    );
    const isOrganisationVotesActive = !!matchPath(
      location.pathname,
      ROUTE_ORGANISATION_VOTES
    );

    if (!organisation) {
      return (
        <MiddlePageWrapperStyle>
          <Spinner />
        </MiddlePageWrapperStyle>
      );
    }

    return (
      <ProfileWrapperStyle>
        <MetaTags />
        <ProfileHeaderStyle aria-hidden />
        <ProfilePageContentWrapperStyle>
          <ProfilePageSidebarStyle>Sidebar</ProfilePageSidebarStyle>
          <ProfilePageContentStyle>
            <TabNavStyle aria-label={i18n.t('common.secondary_nav')}>
              <TabListStyle>
                <TabStyle selected={isOrganisationProposalsActive}>
                  <Link to={organisationProposalsLink}>
                    {i18n.t('organisation.tabs.proposals')}
                  </Link>
                </TabStyle>
                <TabStyle selected={isOrganisationVotesActive}>
                  <Link to={organisationFavouritesLink}>
                    {i18n.t('organisation.tabs.votes')}
                  </Link>
                </TabStyle>
              </TabListStyle>
            </TabNavStyle>
            <Switch>
              <Route
                path={ROUTE_ORGANISATION_PROPOSALS}
                exact
                component={() => (
                  <OrganisationProposalsPage organisation={organisation} />
                )}
              />
              <Route
                path={ROUTE_ORGANISATION_VOTES}
                exact
                component={() => (
                  <OrganisationVotesPage organisation={organisation} />
                )}
              />
            </Switch>
          </ProfilePageContentStyle>
        </ProfilePageContentWrapperStyle>
      </ProfileWrapperStyle>
    );
  }
}

// default export needed for loadable component
export default OrganisationPage; // eslint-disable-line import/no-default-export

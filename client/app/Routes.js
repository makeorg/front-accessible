import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';
import loadable from '@loadable/component';
import {
  ROUTE_SEARCH,
  ROUTE_SEARCH_PROPOSALS,
  ROUTE_SEARCH_ORGANISATIONS,
  ROUTE_SEARCH_CONSULTATIONS,
  ROUTE_CONSULTATION,
  ROUTE_ACTION,
  ROUTE_SEQUENCE,
  ROUTE_ACCOUNT_ACTIVATION,
  ROUTE_PROPOSAL,
  ROUTE_PASSWORD_RECOVERY,
  ROUTE_PROFILE,
  ROUTE_PROFILE_EDIT,
  ROUTE_PROFILE_PROPOSALS,
  ROUTE_PROFILE_FAVOURITES,
  ROUTE_PROFILE_FOLLOWING,
  ROUTE_ORGANISATION_PROFILE,
  ROUTE_ORGANISATION_PROPOSALS,
  ROUTE_ORGANISATION_VOTES,
  ROUTE_COUNTRY_LANG,
  ROUTE_STATIC_LEGAL,
  ROUTE_STATIC_GTU,
  ROUTE_STATIC_DATA,
  ROUTE_STATIC_CONTACT,
  ROUTE_RESULTS,
} from 'Shared/routes';
import { TwitterUniversalTag } from 'Shared/services/Trackers/TwitterTracking';

const ConsultationPage = loadable(() =>
  import('Client/pages/Operation/Consultation.js')
);
const ActionsPage = loadable(() => import('Client/pages/Operation/Actions.js'));
const ResultsPage = loadable(() => import('Client/pages/Operation/Results.js'));
const SequencePage = loadable(() => import('Client/pages/Operation/Sequence'));
const PasswordRecoveryPage = loadable(() =>
  import('Client/pages/PasswordRecovery')
);
const NotFoundPage = loadable(() => import('Client/pages/NotFound'));
const HomePage = loadable(() => import('Client/pages/Home'));
const ProposalPage = loadable(() => import('Client/pages/Proposal'));
const AccountActivationPage = loadable(() =>
  import('Client/pages/AccountActivation')
);
const ProfileEditPage = loadable(() =>
  import('Client/pages/Profile/ProfileEdit')
);

const ProfilePage = loadable(() => import('Client/pages/Profile'));

const OrganisationPage = loadable(() => import('Client/pages/Organisation'));
const SearchPage = loadable(() => import('Client/pages/Search'));

const LegalPage = loadable(() => import('Client/pages/Static/Legal'));
const TermsOfUse = loadable(() => import('Client/pages/Static/TermsOfUse'));
const Data = loadable(() => import('Client/pages/Static/Data'));
const Contact = loadable(() => import('Client/pages/Static/Contact'));

export const Routes = () => {
  const location = useLocation();

  React.useEffect(() => {
    TwitterUniversalTag.pageView();
  }, [location.pathname]);

  return (
    <Switch>
      <Route path={ROUTE_CONSULTATION} component={ConsultationPage} />
      <Route path={ROUTE_ACTION} component={ActionsPage} />
      <Route path={ROUTE_RESULTS} component={ResultsPage} />
      <Route path={ROUTE_SEQUENCE} component={SequencePage} />
      <Route
        path={ROUTE_ACCOUNT_ACTIVATION}
        component={AccountActivationPage}
      />
      <Route path={ROUTE_PROPOSAL} component={ProposalPage} />
      <Route path={ROUTE_PASSWORD_RECOVERY} component={PasswordRecoveryPage} />
      <Route path={ROUTE_PROFILE_EDIT} component={ProfileEditPage} />
      <Route path={ROUTE_PROFILE_PROPOSALS} component={ProfilePage} />
      <Route path={ROUTE_PROFILE_FAVOURITES} component={ProfilePage} />
      <Route path={ROUTE_PROFILE_FOLLOWING} component={ProfilePage} />
      <Route path={ROUTE_ORGANISATION_PROPOSALS} component={OrganisationPage} />
      <Route path={ROUTE_ORGANISATION_VOTES} component={OrganisationPage} />
      <Route path={ROUTE_SEARCH} component={SearchPage} />
      <Route path={ROUTE_SEARCH_PROPOSALS} component={SearchPage} />
      <Route path={ROUTE_SEARCH_ORGANISATIONS} component={SearchPage} />
      <Route path={ROUTE_SEARCH_CONSULTATIONS} component={SearchPage} />
      <Redirect
        path={ROUTE_ORGANISATION_PROFILE}
        to={ROUTE_ORGANISATION_PROPOSALS}
      />
      <Redirect path={ROUTE_PROFILE} to={ROUTE_PROFILE_PROPOSALS} />
      <Route exact path={ROUTE_COUNTRY_LANG} component={HomePage} />
      <Route path={ROUTE_STATIC_LEGAL} component={LegalPage} />
      <Route path={ROUTE_STATIC_GTU} component={TermsOfUse} />
      <Route path={ROUTE_STATIC_DATA} component={Data} />
      <Route path={ROUTE_STATIC_CONTACT} component={Contact} />
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

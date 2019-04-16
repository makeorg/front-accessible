import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import {
  ROUTE_CONSULTATION,
  ROUTE_ACTION,
  ROUTE_SEQUENCE,
  ROUTE_ACCOUNT_ACTIVATION,
  ROUTE_PROPOSAL,
  ROUTE_PASSWORD_RECOVERY,
  ROUTE_PROFILE,
  ROUTE_PROFILE_EDIT,
  ROUTE_PROFILE_PROPOSALS,
  ROUTE_PROFILE_FAVORITES,
  ROUTE_PROFILE_FOLLOWING,
} from 'Shared/routes';

const ConsultationPage = loadable(() => import('Client/pages/Consultation'));
const SequencePage = loadable(() =>
  import('Client/pages/Consultation/Sequence')
);
const PasswordRecoveryPage = loadable(() =>
  import('Client/pages/PasswordRecovery')
);
const NotFoundPage = loadable(() => import('Client/pages/NotFound'));
const ProposalPage = loadable(() => import('Client/pages/Proposal'));
const AccountActivationPage = loadable(() =>
  import('Client/pages/AccountActivation')
);
const ProfileEditPage = loadable(() =>
  import('Client/pages/Profile/ProfileEdit')
);

const ProfilePage = loadable(() => import('Client/pages/Profile'));

export const Routes = () => (
  <Switch>
    <Route path={ROUTE_CONSULTATION} component={ConsultationPage} />
    <Route path={ROUTE_ACTION} component={ConsultationPage} />
    <Route path={ROUTE_SEQUENCE} component={SequencePage} />
    <Route path={ROUTE_ACCOUNT_ACTIVATION} component={AccountActivationPage} />
    <Route path={ROUTE_PROPOSAL} component={ProposalPage} />
    <Route path={ROUTE_PASSWORD_RECOVERY} component={PasswordRecoveryPage} />
    <Route path={ROUTE_PROFILE_EDIT} component={ProfileEditPage} />
    <Route path={ROUTE_PROFILE_PROPOSALS} component={ProfilePage} />
    <Route path={ROUTE_PROFILE_FAVORITES} component={ProfilePage} />
    <Route path={ROUTE_PROFILE_FOLLOWING} component={ProfilePage} />
    <Redirect path={ROUTE_PROFILE} to={ROUTE_PROFILE_PROPOSALS} />
    <Route component={NotFoundPage} />
  </Switch>
);

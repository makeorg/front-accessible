
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const SequencePage = loadable(() => import('Client/pages/Consultation/Sequence'));
const PasswordRecoveryPage = loadable(() => import('Client/pages/PasswordRecovery'));
const NotFoundPage = loadable(() => import('Client/pages/NotFound'));
const ProposalPage = loadable(() => import('Client/pages/Proposal'));
const AccountActivationPage = loadable(() => import('Client/pages/AccountActivation'));

export const Routes = () => (
  <Switch>
    <Route
      path="/:countryLanguage/consultation/:questionSlug/selection"
      component={SequencePage}
    />
    <Route
      path="/:countryLanguage/account-activation/:userId/:verificationToken"
      component={AccountActivationPage}
    />
    <Route
      path="/:countryLanguage/consultation/:questionSlug/proposal/:proposalId/:proposalSlug"
      component={ProposalPage}
    />
    <Route
      path="/:countryLanguage/password-recovery/:userId/:resetToken"
      component={PasswordRecoveryPage}
    />
    <Route component={NotFoundPage} />
  </Switch>);

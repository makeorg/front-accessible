
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import SequencePage from 'Client/pages/Consultation/Sequence';
import ProposalPage from 'Client/pages/Proposal';
import { PasswordRecoveryPage } from 'Client/pages/PasswordRecovery';
import NotFoundPage from 'Client/pages/NotFound';
import HomePage from 'Client/pages/Home';
import { AccountActivationPage } from 'Client/pages/AccountActivation';

export const Routes = () => (
  <Switch>
    <Route
      path="/404"
      component={NotFoundPage}
    />
    <Route
      exact
      path="/:countryLanguage"
      component={HomePage}
    />
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
  </Switch>);


import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import SequencePage from 'Src/pages/Consultation/Sequence';
import ProposalPage from 'Src/pages/Proposal';
import { PasswordRecoveryPage } from 'Src/pages/PasswordRecovery';
import NotFoundPage from 'Src/pages/NotFound';
import HomePage from 'Src/pages/Home';
import { AccountActivationPage } from 'Src/pages/AccountActivation';

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

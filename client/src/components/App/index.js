/* @flow */

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CookieBannerContainer } from 'Src/containers/Cookie';
import MainHeaderContainer from 'Src/containers/MainHeader';
import PannelContainer from 'Src/containers/Pannel';
import SequencePage from 'Src/pages/Consultation/Sequence';
import ProposalPage from 'Src/pages/Proposal';
import { PasswordRecoveryPage } from 'Src/pages/PasswordRecovery';
import NotFoundPage from 'Src/pages/NotFound';
import HomePage from 'Src/pages/Home';
import ModernNormalizeStylesheet from 'Src/assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from 'Src/assets/css-in-js/FontFaces';
import DefaultStylesheet from 'Src/assets/css-in-js/DefaultStyle';
import AnimationsStylesheet from 'Src/assets/css-in-js/Animations';
import { UIThemeStylesheet } from 'Src/assets/css-in-js/UITheme';
import { AppWrapper, MainContent } from 'Src/components/Elements/MainElements';
import { AccountActivationPage } from 'Src/pages/AccountActivation';
import { NotificationContainer } from 'Src/containers/Notification';
import { MainFooterComponent } from 'Src/components/MainFooter';

/**
 * Renders App component
 */
const AppComponent = () => (
  <AppWrapper>
    <ModernNormalizeStylesheet />
    <FontFacesStylesheet />
    <DefaultStylesheet />
    <AnimationsStylesheet />
    <UIThemeStylesheet />
    <CookieBannerContainer />
    <MainHeaderContainer />
    <MainContent role="main">
      <NotificationContainer />
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
      </Switch>
      <PannelContainer />
    </MainContent>
    <MainFooterComponent />
  </AppWrapper>
);

export default AppComponent;

/* @flow */

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CookieBannerContainer } from 'Containers/Cookie';
import MainHeaderContainer from 'Containers/MainHeader';
import PannelContainer from 'Containers/Pannel';
import SequencePage from 'Pages/Consultation/Sequence';
import ProposalPage from 'Pages/Proposal';
import NotFoundPage from 'Pages/NotFound';
import HomePage from 'Pages/Home';
import ModernNormalizeStylesheet from 'Assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from 'Assets/css-in-js/FontFaces';
import DefaultStylesheet from 'Assets/css-in-js/DefaultStyle';
import AnimationsStylesheet from 'Assets/css-in-js/Animations';
import { UIThemeStylesheet } from 'Assets/css-in-js/UITheme';
import { AppWrapper, MainContent } from 'Components/Elements/MainElements';
import { AccountActivationPage } from 'Pages/AccountActivation';
import { NotificationContainer } from 'Containers/Notification';

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
          component={NotFoundPage}
        />
      </Switch>
    </MainContent>
    <PannelContainer />
  </AppWrapper>
);

export default AppComponent;

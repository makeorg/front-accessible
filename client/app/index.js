import * as React from 'react';
import { CookieBannerContainer } from 'Src/containers/Cookie';
import MainHeaderContainer from 'Src/containers/MainHeader';
import PannelContainer from 'Src/containers/Pannel';

import ModernNormalizeStylesheet from 'Src/assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from 'Src/assets/css-in-js/FontFaces';
import DefaultStylesheet from 'Src/assets/css-in-js/DefaultStyle';
import AnimationsStylesheet from 'Src/assets/css-in-js/Animations';
import { UIThemeStylesheet } from 'Src/assets/css-in-js/UITheme';
import { AppWrapper, MainContent } from 'Src/components/Elements/MainElements';
import { NotificationContainer } from 'Src/containers/Notification';
import { MainFooterComponent } from 'Src/components/MainFooter';
import { Routes } from './Routes';
import ErrorBoundary from './Error';

/**
 * Handles App Business Logic
 */
export const AppContainer = () => (
  <ErrorBoundary>
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
        <Routes />
        <PannelContainer />
      </MainContent>
      <MainFooterComponent />
    </AppWrapper>
  </ErrorBoundary>
);

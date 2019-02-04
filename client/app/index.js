import * as React from 'react';

import ModernNormalizeStylesheet from 'Client/app/assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from 'Client/app/assets/css-in-js/FontFaces';
import DefaultStylesheet from 'Client/app/assets/css-in-js/DefaultStyle';
import { UIThemeStylesheet } from 'Client/app/assets/css-in-js/UITheme';
import { AppWrapper, MainContent } from 'Client/app/Styled/MainElements';
import { Notification } from './Notification';
import { CookieBanner } from './CookieBanner';
import { MainHeader } from './MainHeader';
import { MainFooter } from './MainFooter';
import { Pannel } from './Pannel';
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
      <UIThemeStylesheet />
      <CookieBanner />
      <MainHeader />
      <MainContent role="main">
        <Notification />
        <Routes />
        <Pannel />
      </MainContent>
      <MainFooter />
    </AppWrapper>
  </ErrorBoundary>
);

import * as React from 'react';

import { ModernNormalizeStylesheet } from 'Client/app/assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from 'Client/app/assets/css-in-js/FontFaces';
import { DefaultStylesheet } from 'Client/app/assets/css-in-js/DefaultStyle';
import { UIThemeStylesheet } from 'Client/app/assets/css-in-js/UITheme';
import {
  AppWrapperStyle,
  AppMainContentStyle,
} from 'Client/app/Styled/MainElements';
import { Browse } from 'Client/pages/Consultation/Browse';
// import { Notification } from './Notification';
import { CookieBanner } from './CookieBanner';
import { Header } from './Header';
import { Footer } from './Footer';
import { Modal } from './Modal';
// import { Routes } from './Routes';
import { SecureExpiration } from './Expiration/Secure';
import { SessionExpiration } from './Expiration/Session';
import { ErrorBoundary, ServiceErrorHandler } from './Error';
import { MainSkipLinks } from './SkipLinks/Main';

/**
 * Handles App Business Logic
 */
export const AppContainer = () => (
  <SecureExpiration>
    <SessionExpiration>
      <ServiceErrorHandler>
        <ErrorBoundary>
          <AppWrapperStyle>
            <ModernNormalizeStylesheet />
            <FontFacesStylesheet />
            <DefaultStylesheet />
            <UIThemeStylesheet />
            <CookieBanner />
            <MainSkipLinks />
            <Header />
            <AppMainContentStyle id="main_content" data-cy-container="main">
              {/* <Notification />
              <Routes /> */}
              <Browse />
            </AppMainContentStyle>
            <Modal />
            <Footer />
          </AppWrapperStyle>
        </ErrorBoundary>
      </ServiceErrorHandler>
    </SessionExpiration>
  </SecureExpiration>
);

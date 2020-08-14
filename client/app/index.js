import * as React from 'react';

import { ModernNormalizeStylesheet } from 'Client/app/assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from 'Client/app/assets/css-in-js/FontFaces';
import { DefaultStylesheet } from 'Client/app/assets/css-in-js/DefaultStyle';
import { UIThemeStylesheet } from 'Client/app/assets/css-in-js/UITheme';
import {
  AppWrapperStyle,
  AppMainContentStyle,
} from 'Client/app/Styled/MainElements';
import { NAVIGATION_ARIA_CLASS, PANEL_ARIA_CLASS } from 'Shared/constants/a11y';
import { MAIN_CONTENT } from 'Shared/constants/ids';
import { Notification } from './Notification';
import { CookieBanner } from './CookieBanner';
import { Header } from './Header';
import { Footer } from './Footer';
import { Modal } from './Modal';
import { Routes } from './Routes';
import { SecureExpiration } from './Expiration/Secure';
import { SessionExpiration } from './Expiration/Session';
import { ErrorBoundary, ServiceErrorHandler } from './Error';
import { MainSkipLinks } from './SkipLinks/Main';
import { Panel } from './Panel';
/**
 * Handles App Business Logic
 */
export const AppContainer = () => (
  <SecureExpiration>
    <SessionExpiration>
      <ServiceErrorHandler>
        <ErrorBoundary>
          {/** page_wrapper id is used to set page background color in usePageBackgroundColor hook */}
          <AppWrapperStyle id="page_wrapper">
            <ModernNormalizeStylesheet />
            <FontFacesStylesheet />
            <DefaultStylesheet />
            <UIThemeStylesheet />
            <CookieBanner />
            <MainSkipLinks />
            <Header />
            <AppMainContentStyle
              id={MAIN_CONTENT}
              data-cy-container="main"
              className={`${NAVIGATION_ARIA_CLASS} ${PANEL_ARIA_CLASS}`}
            >
              <Notification />
              <Routes />
            </AppMainContentStyle>
            <Modal />
            <Footer />
          </AppWrapperStyle>
          <Panel />
        </ErrorBoundary>
      </ServiceErrorHandler>
    </SessionExpiration>
  </SecureExpiration>
);

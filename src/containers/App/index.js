import * as React from 'react';
import AppComponent from 'Components/App';
import ErrorBoundary from './Error';

/**
 * Handles App Business Logic
 */
export const AppContainer = () => (
  <ErrorBoundary>
    <AppComponent />
  </ErrorBoundary>
);

import * as React from 'react';
import AppComponent from 'Src/components/App';
import ErrorBoundary from './Error';

/**
 * Handles App Business Logic
 */
export const AppContainer = () => (
  <ErrorBoundary>
    <AppComponent />
  </ErrorBoundary>
);

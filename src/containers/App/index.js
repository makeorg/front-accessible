import * as React from 'react';
import AppComponent from 'Components/App';
import Tracking from 'Services/Tracking';
import ErrorBoundary from './Error';

/**
 * Handles App Business Logic
 */
class AppContainer extends React.Component {
  componentDidMount = () => {
    Tracking.trackDisplaySequence();
  }

  render() {
    return (
      <ErrorBoundary>
        <AppComponent />
      </ErrorBoundary>
    );
  }
}


export default AppContainer;

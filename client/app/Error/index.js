import * as React from 'react';
import { Logger } from 'Shared/services/Logger';

/**
 * Handles Error Logger Business Logic
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    Logger.logError(Error(error, (info && info.componentStack)));
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Un problème est survenu.</h1>;
    }
    return children;
  }
}

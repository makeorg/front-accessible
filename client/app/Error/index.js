// @flow
import * as React from 'react';
import { Logger } from 'Shared/services/Logger';

type Props = {
  children: React.Node,
};

type State = {
  hasError: boolean,
};

/**
 * Handles Error Logger Business Logic
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error) {
    this.setState({ hasError: true });
    Logger.logError(error);
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

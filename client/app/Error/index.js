// @flow
import * as React from 'react';
import { Logger } from 'Shared/services/Logger';
import { showUnexpectedError } from 'Shared/store/actions/notification';
import { setUnexpectedError } from 'Shared/services/DefaultErrorHandler';
import { useDispatch } from 'react-redux';

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
    // init service error notification

    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Un problème est survenu.</h1>;
    }
    return children;
  }
}

/**
 * Handles Services Error
 */
export const ServiceErrorHandler = (props: Object) => {
  const dispatch = useDispatch();
  setUnexpectedError(() => {
    dispatch(showUnexpectedError());
  });

  return props.children;
};

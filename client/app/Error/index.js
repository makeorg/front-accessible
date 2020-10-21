// @flow
import * as React from 'react';
import { Logger } from 'Shared/services/Logger';
import { displayNotificationBanner } from 'Shared/store/actions/notifications';
import { setUnexpectedError } from 'Shared/services/DefaultErrorHandler';
import { useDispatch } from 'react-redux';
import {
  NETWORK_ERROR_MESSAGE,
  NOTIFICATION_LEVEL_ALERT,
  UNEXPECTED_ERROR_MESSAGE,
} from 'Shared/constants/notifications';
import { UnexpectedErrorMessage } from '../Notifications/Banner/UnexpectedError';
import { NetworkErrorMessage } from '../Notifications/Banner/NetworkError';

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
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

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
  setUnexpectedError(error => {
    try {
      if (!error.logged) {
        Logger.logError(
          error.clone(`You should handle unexpected errors: ${error.message}`)
        );
      }
    } catch (e) {
      Logger.logError(e);
    }
    if (
      typeof window !== 'undefined' &&
      window &&
      window.navigator &&
      window.navigator.onLine === false
    ) {
      dispatch(
        displayNotificationBanner(
          NETWORK_ERROR_MESSAGE,
          <NetworkErrorMessage />,
          NOTIFICATION_LEVEL_ALERT
        )
      );
    } else {
      dispatch(
        displayNotificationBanner(
          UNEXPECTED_ERROR_MESSAGE,
          <UnexpectedErrorMessage />,
          NOTIFICATION_LEVEL_ALERT
        )
      );
    }
  });

  return props.children;
};

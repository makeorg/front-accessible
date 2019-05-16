/* @flow */
import * as React from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { GTU_LINK, DATA_POLICY_LINK } from 'Shared/constants/url';
import { CookieBannerComponent } from './CookieBannerComponent';

type Props = {
  /** Cookies object */
  cookies: Cookies,
};

type State = {
  hasAccepted: boolean,
};

const acceptCookieName: string = 'make-cookie';
/**
 * Renders Cookie Banner container
 */
export class CookieBanner extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { cookies } = props;

    this.state = { hasAccepted: cookies.get(acceptCookieName) !== undefined };
  }

  handleClose = () => {
    const { cookies } = this.props;
    cookies.set(acceptCookieName, true, { path: '/' });
    this.setState({ hasAccepted: true });
  };

  render = () => {
    const { hasAccepted } = this.state;
    if (hasAccepted) {
      return null;
    }

    return (
      <CookieBannerComponent
        cguLink={GTU_LINK}
        policyLink={DATA_POLICY_LINK}
        handleClose={this.handleClose}
      />
    );
  };
}

export const CookieBannerContainer = withCookies(CookieBanner);

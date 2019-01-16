/* @flow */
import * as React from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { CookieBannerComponent } from 'Components/Cookie';
import * as Helpers from 'Helpers/url';

type Props = {
  /** Cookies object */
  cookies: Cookies
};

const acceptCookieName: string = 'make-cookie';
/**
 * Renders Cookie Banner container
 */
export class CookieBanner extends React.Component<Props> {
  constructor(props) {
    super(props);
    const { cookies } = props;

    this.state = { hasAccespted: (cookies.get(acceptCookieName) !== undefined) };
  }

  handleClose = () => {
    const { cookies } = this.props;
    cookies.set(acceptCookieName, true, { path: '/' });
    this.setState({ hasAccespted: true });
  }

  render = () => {
    const { hasAccespted } = this.state;
    if (hasAccespted) {
      return null;
    }

    const cguLink = Helpers.localizeCguLink();
    const policyLink = Helpers.localizeDataPolicyLink();

    return (
      <CookieBannerComponent
        cguLink={cguLink}
        policyLink={policyLink}
        handleClose={this.handleClose}
      />
    );
  }
}

export const CookieBannerContainer = withCookies(CookieBanner);
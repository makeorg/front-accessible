/* @flow */
import * as React from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { connect } from 'react-redux';
import { CookieBannerComponent } from 'Components/Cookie';
import * as Helpers from 'Helpers/url';

type Props = {
  /** String with Language value */
  language: String,
  /** String with Country value */
  country: String,
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

    const { country, language } = this.props;
    const cguLink = Helpers.localizeCguLink(country, language);
    const policyLink = Helpers.localizePolicyLink(country, language);

    return (
      <CookieBannerComponent
        cguLink={cguLink}
        policyLink={policyLink}
        handleClose={this.handleClose}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { language, country } = state.appConfig;

  return {
    language,
    country
  };
};

export const CookieBannerContainer = withCookies(connect(mapStateToProps)(CookieBanner));

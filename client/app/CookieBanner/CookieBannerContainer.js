/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import * as Helpers from 'Shared/helpers/url';
import { CookieBannerComponent } from './CookieBannerComponent';

type Props = {
  /** Cookies object */
  cookies: Cookies,
  /** Localiszed Language of the app */
  language: string,
  /** Localiszed Country of the app */
  country: string
};

type State = {
  hasAccepted: boolean,
  hideCookieBanner: boolean
};

const acceptCookieName: string = 'make-cookie';
/**
 * Renders Cookie Banner container
 */
export class CookieBanner extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { cookies } = props;

    this.state = { hasAccepted: (cookies.get(acceptCookieName) !== undefined), hideCookieBanner: true };
  }

  // TODO refacoring componentDidMount, Used to 'rerender component and update translations
  componentDidMount() {
    this.setState({ hideCookieBanner: false });
  }

  handleClose = () => {
    const { cookies } = this.props;
    cookies.set(acceptCookieName, true, { path: '/' });
    this.setState({ hasAccepted: true });
  }

  render = () => {
    const { hasAccepted, hideCookieBanner } = this.state;
    if (hasAccepted || hideCookieBanner) {
      return null;
    }
    const { country, language } = this.props;
    const cguLink = Helpers.localizeCguLink(country, language);
    const policyLink = Helpers.localizeDataPolicyLink(country, language);

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
  const { country, language } = state.appConfig;

  return { country, language };
};

export const CookieBannerContainer = connect(mapStateToProps)(withCookies(CookieBanner));

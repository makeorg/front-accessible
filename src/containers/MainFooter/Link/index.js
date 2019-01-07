/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { FooterLinkComponent } from 'Components/MainFooter/Link';

type Props = {
  /** String with Language value */
  language: String,
  /** String with Country value */
  country: String
};

/**
 * Handles Main Footer Business Logic
 */
class FooterLinkContainer extends React.Component<Props> {
  render() {
    return (
      <FooterLinkComponent {...this.props} />
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

export default connect(mapStateToProps, null)(FooterLinkContainer);

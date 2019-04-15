/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { FooterLinkComponent } from './FooterLinkComponent';

type Props = {
  /** String with Language value */
  language: string,
  /** String with Country value */
  country: string,
};

/**
 * Handles Main Footer Business Logic
 */
const FooterLink = (props: Props) => {
  const { country, language } = props;
  return <FooterLinkComponent country={country} language={language} />;
};

const mapStateToProps = state => {
  const { language, country } = state.appConfig;

  return {
    language,
    country,
  };
};

export const FooterLinkContainer = connect(mapStateToProps)(FooterLink);

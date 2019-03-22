/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { AuthentificationSocialComponent } from './AuthentificationSocialComponent';

type Props = {
  /** Boolean toggled when Modal is opened / closed */
  isModalOpen: boolean,
  /** Method to track Facebook Login */
  trackFacebookLogin: Function,
  /** Method to track Google Login */
  trackGoogleLogin: Function,
};

/**
 * Handles Google & Fracebook Authentification Business Logic
 */
const AuthentificationSocialModal = (props: Props) => {
  const { isModalOpen } = props;
  return (
    <AuthentificationSocialComponent
      tabIndex={isModalOpen ? 0 : -1}
      {...props}
    />
  );
};

const mapStateToProps = state => {
  const { isModalOpen } = state.modal;

  return {
    isModalOpen,
  };
};

export const AuthentificationSocialContainer = connect(mapStateToProps)(
  AuthentificationSocialModal
);

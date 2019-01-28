/* @flow */
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import SharingComponent from 'Src/components/Sharing';
import { twitterShareUrl, facebookShareUrl, linkedinShareUrl } from 'Src/helpers/url';

/**
 * Handles Sharing Business Logic
 */
const SharingContainer = ({ location }) => (
  <SharingComponent
    twitterShareUrl={twitterShareUrl(location.pathname)}
    facebookShareUrl={facebookShareUrl(location.pathname)}
    linkedinShareUrl={linkedinShareUrl(location.pathname)}
  />
);

export default withRouter(SharingContainer);

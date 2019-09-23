/* @flow */
import * as React from 'react';
import { type Location } from 'history';
import { withRouter } from 'react-router-dom';
import {
  twitterShareUrl,
  facebookShareUrl,
  linkedinShareUrl,
} from 'Shared/helpers/social';
import { SharingComponent } from './SharingComponent';

type Props = {
  location: Location,
};

/**
 * Handles Sharing Business Logic
 */

const SharingClass = (props: Props) => {
  const { location } = props;

  return (
    <SharingComponent
      twitterShareUrl={twitterShareUrl(location.pathname, '', '')}
      facebookShareUrl={facebookShareUrl(location.pathname)}
      linkedinShareUrl={linkedinShareUrl(location.pathname)}
    />
  );
};

export const SharingContainer = withRouter(SharingClass);

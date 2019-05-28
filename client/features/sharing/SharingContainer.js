/* @flow */
import * as React from 'react';
import { type Location } from 'history';
import { withRouter } from 'react-router-dom';
import { type Sharing as TypeSharing } from 'Shared/types/sequence';
import {
  twitterShareUrl,
  facebookShareUrl,
  linkedinShareUrl,
} from 'Shared/helpers/social';
import { SharingComponent } from './SharingComponent';

type Props = {
  location: Location,
  sharingParams?: TypeSharing,
};

/**
 * Handles Sharing Business Logic
 */

const SharingClass = (props: Props) => {
  const { location, sharingParams } = props;

  let hashtags: string = '';

  if (sharingParams && sharingParams.twitterHashtags) {
    hashtags = sharingParams.twitterHashtags;
  }

  return (
    <SharingComponent
      twitterShareUrl={twitterShareUrl(location.pathname, '', hashtags)}
      facebookShareUrl={facebookShareUrl(location.pathname)}
      linkedinShareUrl={linkedinShareUrl(location.pathname)}
    />
  );
};

export const SharingContainer = withRouter(SharingClass);

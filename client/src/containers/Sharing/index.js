/* @flow */
import * as React from 'react';
import { Location } from 'history';
import { withRouter } from 'react-router-dom';
import { SharingComponent } from 'Src/components/Sharing';
import { twitterShareUrl, facebookShareUrl, linkedinShareUrl } from 'Shared/helpers/url';

type Props = {
  location: Location,
  tabIndex?: number
}

/**
 * Handles Sharing Business Logic
 */

class SharingContainerLinks extends React.Component<Props> {
  static defaultProps = {
    tabIndex: undefined
  }

  render() {
    const {
      location,
      tabIndex
    } = this.props;

    return (
      <SharingComponent
        twitterShareUrl={twitterShareUrl(location.pathname)}
        facebookShareUrl={facebookShareUrl(location.pathname)}
        linkedinShareUrl={linkedinShareUrl(location.pathname)}
        tabIndex={tabIndex}
      />
    );
  }
}

export const SharingContainer = withRouter(SharingContainerLinks);

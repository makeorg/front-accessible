/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { Location } from 'history';
import { withRouter } from 'react-router-dom';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import {
  twitterShareUrl,
  facebookShareUrl,
  linkedinShareUrl,
} from 'Shared/helpers/url';
import { SharingComponent } from './SharingComponent';

type Props = {
  location: Location,
  questionConfiguration: QuestionConfiguration,
  tabIndex?: number,
};

/**
 * Handles Sharing Business Logic
 */

class SharingContainerLinks extends React.Component<Props> {
  static defaultProps = {
    tabIndex: undefined,
  };

  render() {
    const { location, questionConfiguration, tabIndex } = this.props;

    let hashtagsProps: string = '';

    if (questionConfiguration.sharing) {
      hashtagsProps = questionConfiguration.sharing.twitter.hashtags;
    }

    return (
      <SharingComponent
        twitterShareUrl={twitterShareUrl(location.pathname, '', hashtagsProps)}
        facebookShareUrl={facebookShareUrl(location.pathname)}
        linkedinShareUrl={linkedinShareUrl(location.pathname)}
        tabIndex={tabIndex}
      />
    );
  }
}

const mapStateToProps = state => {
  const { questionConfiguration } = state.sequence;

  return {
    questionConfiguration,
  };
};

export const SharingContainer = withRouter(
  connect(mapStateToProps)(SharingContainerLinks)
);

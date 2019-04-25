/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { type Location } from 'history';
import { withRouter } from 'react-router-dom';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import {
  twitterShareUrl,
  facebookShareUrl,
  linkedinShareUrl,
} from 'Shared/helpers/social';
import { selectSequenceQuestionConfiguration } from 'Shared/store/selectors/sequence.selector';
import { SharingComponent } from './SharingComponent';

type Props = {
  location: Location,
  questionConfiguration: TypeQuestionConfiguration,
};

/**
 * Handles Sharing Business Logic
 */

class SharingContainerLinks extends React.Component<Props> {
  render() {
    const { location, questionConfiguration } = this.props;

    let twitterHashtags: string = '';

    if (questionConfiguration.sharing) {
      twitterHashtags = questionConfiguration.sharing.twitter.hashtags;
    }

    return (
      <SharingComponent
        twitterShareUrl={twitterShareUrl(
          location.pathname,
          '',
          twitterHashtags
        )}
        facebookShareUrl={facebookShareUrl(location.pathname)}
        linkedinShareUrl={linkedinShareUrl(location.pathname)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    questionConfiguration: selectSequenceQuestionConfiguration(state),
  };
};

export const SharingContainer = withRouter(
  connect(mapStateToProps)(SharingContainerLinks)
);

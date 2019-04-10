import React, { Component } from 'react';
import { type Profile } from 'Shared/types/user';
import * as UserService from 'Shared/services/User';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { i18n } from 'Shared/i18n';
import { UpdateNewsletterComponent } from './UpdateNewsletterComponent';

type Props = {
  profile: Profile,
};
type State = {
  submitDone: boolean,
  submitError: boolean,
};

export class UpdateNewsletterContainer extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      optInNewsletter: props.profile.optInNewsletter,
      submitDone: false,
      submitError: false,
    };
  }

  handleCheck = () => {
    this.setState(prevState => ({
      optInNewsletter: !prevState.optInNewsletter,
    }));
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { optInNewsletter } = this.state;
    try {
      await UserService.updateNewsletter(optInNewsletter);
      this.setState({ submitDone: true });
    } catch {
      this.setState({ submitError: true });
    }
  };

  render() {
    const { optInNewsletter, submitError, submitDone } = this.state;

    return (
      <TileWithTitle title={i18n.t('profile.newsletter_update.title')}>
        <UpdateNewsletterComponent
          optInNewsletter={optInNewsletter}
          submitDone={submitDone}
          submitError={submitError}
          handleCheck={this.handleCheck}
          handleSubmit={this.handleSubmit}
        />
      </TileWithTitle>
    );
  }
}

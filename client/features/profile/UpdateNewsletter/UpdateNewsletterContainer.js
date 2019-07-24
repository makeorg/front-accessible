import React, { Component } from 'react';
import { type TypeProfile } from 'Shared/types/user';
import * as UserService from 'Shared/services/User';
import { UpdateNewsletterComponent } from './UpdateNewsletterComponent';

type Props = {
  profile: TypeProfile,
};

type State = {
  canSubmit: boolean,
  submitDone: boolean,
  submitError: boolean,
};

export class UpdateNewsletterContainer extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      optInNewsletter: props.profile.optInNewsletter,
      canSubmit: false,
      submitDone: false,
      submitError: false,
    };
  }

  handleCheck = () => {
    this.setState(prevState => ({
      optInNewsletter: !prevState.optInNewsletter,
      canSubmit: true,
    }));
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { optInNewsletter } = this.state;
    try {
      await UserService.updateNewsletter(optInNewsletter);
      this.setState({ submitDone: true, canSubmit: false });
    } catch {
      this.setState({ submitError: true, canSubmit: false });
    }
  };

  render() {
    const { optInNewsletter, submitError, submitDone, canSubmit } = this.state;

    return (
      <UpdateNewsletterComponent
        optInNewsletter={optInNewsletter}
        submitDone={submitDone}
        submitError={submitError}
        handleCheck={this.handleCheck}
        handleSubmit={this.handleSubmit}
        canSubmit={canSubmit}
      />
    );
  }
}

import React, { Component } from 'react';
import { type Profile } from 'Shared/types/user';
import * as UserService from 'Shared/services/User';
import { UpdateNewsletterComponent } from './UpdateNewsletterComponent';

type Props = {
  profile: Profile,
};

type State = {
  formIsValid: boolean,
  submitDone: boolean,
  submitError: boolean,
};

export class UpdateNewsletterContainer extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      optInNewsletter: props.profile.optInNewsletter,
      formIsValid: false,
      submitDone: false,
      submitError: false,
    };
  }

  handleCheck = () => {
    this.setState(prevState => ({
      optInNewsletter: !prevState.optInNewsletter,
      formIsValid: true,
    }));
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { optInNewsletter } = this.state;
    try {
      await UserService.updateNewsletter(optInNewsletter);
      this.setState({ submitDone: true, formIsValid: false });
    } catch {
      this.setState({ submitError: true, formIsValid: false });
    }
  };

  render() {
    const {
      optInNewsletter,
      submitError,
      submitDone,
      formIsValid,
    } = this.state;

    return (
      <UpdateNewsletterComponent
        optInNewsletter={optInNewsletter}
        submitDone={submitDone}
        submitError={submitError}
        handleCheck={this.handleCheck}
        handleSubmit={this.handleSubmit}
        formIsValid={formIsValid}
      />
    );
  }
}

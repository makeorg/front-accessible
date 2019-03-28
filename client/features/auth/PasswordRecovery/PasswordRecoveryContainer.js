/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { selectPasswordRecovery } from 'Shared/store/selectors/user.selector';
import { passwordRecovery } from 'Shared/store/actions/user/passwordRecovery';
import { throttle } from 'Shared/helpers/throttle';
import { PasswordRecoveryComponent } from './PasswordRecoveryComponent';

type Props = {
  /** Boolean to check if form contain errors */
  error: boolean,
  /** Error message to display to the user */
  errorMessage: string,
  /** Boolean toggled when Form is succesfully submitted */
  updated: boolean,
  /** Function to dispatch form submit */
  handleSubmitForm: (password: string) => void,
};

type State = {
  /** User's email */
  password: string,
};

/**
 * Handles Password Recovery Business Logic
 */
class PasswordRecovery extends React.Component<Props, State> {
  throttleSubmit: any = undefined;

  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
    this.throttleSubmit = throttle(this.handleSubmit);
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const password = event.target.value;
    this.setState({
      password,
    });
  };

  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const { password } = this.state;
    const { handleSubmitForm } = this.props;
    if (password) {
      handleSubmitForm(password);
    }
  };

  render() {
    return (
      <PasswordRecoveryComponent
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.throttleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  const { error, errorMessage, updated } = selectPasswordRecovery(state);

  return { error, errorMessage, updated };
};

const mapDispatchToProps = dispatch => ({
  handleSubmitForm: password => {
    dispatch(passwordRecovery(password));
  },
});

export const PasswordRecoveryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordRecovery);

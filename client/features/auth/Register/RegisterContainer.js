/* @flow */

import * as React from 'react';
import { type UserObject, type ErrorObject } from 'Shared/types/form';
import { throttle } from 'Shared/helpers/throttle';
import { connect } from 'react-redux';
import { register } from 'Shared/store/actions/registration';
import { modalShowLogin } from 'Shared/store/actions/modal';
import { RegisterComponent } from './RegisterComponent';

type Props = {
  /** Array with form errors */
  errors: Array<ErrorObject>,
  /** Boolean toggled when Modal is opened / closed */
  isModalOpen: boolean,
  /** Method called to render Login Component in Modal */
  handleLoginModal: () => void,
  /** Method called to render Register Component in Modal */
  handleRegister: UserObject => void,
};

type State = {
  /** type UserObject = {
    email: string,
    password: string,
    firstname: string,
    age: string,
    postalcode: string,
    profession: string
  } */
  user: UserObject,
};

/**
 * Handles Register Business Logic
 */
class RegisterHandler extends React.Component<Props, State> {
  state = {
    user: {
      email: '',
      password: '',
      firstname: '',
      age: '',
      postalcode: '',
      profession: '',
    },
  };

  throttleSubmit: any = undefined;

  constructor(props: Props) {
    super(props);
    this.throttleSubmit = throttle(this.handleSubmit);
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [id]: value,
      },
    });
  };

  handleSubmit = (event: SyntheticInputEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { user } = this.state;
    const { handleRegister } = this.props;

    if (user.email && user.password && user.firstname) {
      handleRegister(user);
    }
  };

  render() {
    return (
      <RegisterComponent
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.throttleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  const { errors } = state.registration;
  const { isModalOpen } = state.modal;

  return {
    errors,
    isModalOpen,
  };
};

const mapDispatchToProps = dispatch => ({
  handleRegister: user => {
    dispatch(register(user));
  },
  handleLoginModal: () => {
    dispatch(modalShowLogin());
  },
});

export const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterHandler);

/* @flow */

import * as React from 'react';
import { type UserObject, type ErrorObject } from 'Shared/types/form';
import { throttle } from 'Shared/helpers/throttle';
import { connect } from 'react-redux';
import { register } from 'Shared/store/actions/registration';
import { modalShowLogin } from 'Shared/store/actions/modal';
import { selectRegistration } from 'Shared/store/selectors/user.selector';
import { selectConfig } from 'Shared/store/selectors/config.selector';
import { RegisterComponent } from './RegisterComponent';

type Props = {
  /** Array with form errors */
  errors: ErrorObject[],
  /** Current country */
  country: string,
  /** Current language */
  language: string,
  /** Method called to render Login Component in Modal */
  handleLoginModal: () => void,
  /** Method called to render Register Component in Modal */
  handleRegister: UserObject => void,
};

type State = {
  /** User form data */
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
    const {
      errors,
      country,
      language,
      handleLoginModal,
      handleRegister,
    } = this.props;
    const { user } = this.state;
    return (
      <RegisterComponent
        country={country}
        language={language}
        errors={errors}
        user={user}
        handleLoginModal={handleLoginModal}
        handleRegister={handleRegister}
        handleChange={this.handleChange}
        handleSubmit={this.throttleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  const { errors } = selectRegistration(state);
  const { country, language } = selectConfig(state);

  return { errors, country, language };
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

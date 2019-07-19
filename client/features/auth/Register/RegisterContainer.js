/* @flow */

import * as React from 'react';
import { type RegisterFormData as TypeRegisterFormData } from 'Shared/types/form';
import { type TypeErrorObject } from 'Shared/types/api';
import { throttle } from 'Shared/helpers/throttle';
import { connect } from 'react-redux';
import { modalShowLogin, modalClose } from 'Shared/store/actions/modal';
import * as UserService from 'Shared/services/User';
import { Logger } from 'Shared/services/Logger';
import { Tracking } from 'Shared/services/Tracking';
import { getUser } from 'Shared/store/actions/authentification';
import { validateRegisterForm } from 'Shared/helpers/validation';
import { RegisterComponent } from './RegisterComponent';

type Props = {
  /** Method called to render Login Component in Modal */
  handleLoginModal: () => void,
  /** Method called to close modal */
  handleModalClose: () => void,
  /** Method called to load user */
  handleLoadUser: () => void,
};

type State = {
  /** User form data */
  user: TypeRegisterFormData,
  /** Array with form errors */
  errors: TypeErrorObject[],
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
    errors: [],
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

  logAndLoadUser = async (email, password) => {
    const { handleLoadUser } = this.props;
    try {
      await UserService.login(email, password);
      handleLoadUser();
    } catch {
      // @toDo: notify user
      Logger.logError(`Login fail for ${email}`);
    }
  };

  handleSubmit = async (event: SyntheticInputEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { user } = this.state;

    const errors = validateRegisterForm(user);

    if (errors.length > 0) {
      this.setState({
        errors,
      });
      return;
    }

    const { handleModalClose } = this.props;
    try {
      await UserService.register(user);
      Tracking.trackSignupEmailSuccess();
      handleModalClose();
      this.logAndLoadUser(user.email, user.password);
    } catch (serviceErrors) {
      Tracking.trackSignupEmailFailure();
      this.setState({ errors: serviceErrors });
    }
  };

  render() {
    const { handleLoginModal } = this.props;
    const { errors, user } = this.state;

    return (
      <RegisterComponent
        errors={errors}
        user={user}
        handleLoginModal={handleLoginModal}
        handleChange={this.handleChange}
        handleSubmit={this.throttleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLoginModal: () => {
    dispatch(modalShowLogin());
  },
  handleModalClose: () => {
    dispatch(modalClose());
  },
  handleLoadUser: () => {
    dispatch(getUser());
  },
});

export const RegisterContainer = connect(
  null,
  mapDispatchToProps
)(RegisterHandler);

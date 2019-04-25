/* @flow */

import * as React from 'react';
import { type UserObject, type ErrorObject } from 'Shared/types/form';
import { throttle } from 'Shared/helpers/throttle';
import { connect } from 'react-redux';
import { modalShowLogin, modalClose } from 'Shared/store/actions/modal';
import { selectConfig } from 'Shared/store/selectors/config.selector';
import * as UserService from 'Shared/services/User';
import { Logger } from 'Shared/services/Logger';
import { Tracking } from 'Shared/services/Tracking';
import { getUser } from 'Shared/store/actions/authentification';
import { RegisterComponent } from './RegisterComponent';

type Props = {
  /** Current country */
  country: string,
  /** Current language */
  language: string,
  /** Method called to render Login Component in Modal */
  handleLoginModal: () => void,
  /** Method called to close modal */
  handleModalClose: () => void,
  /** Method called to load user */
  handleLoadUser: () => void,
};

type State = {
  /** User form data */
  user: UserObject,
  /** Array with form errors */
  errors: ErrorObject[],
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

    const errors = [];

    if (!user.email) {
      errors.push({ field: 'email', message: 'common.form.required_field' });
    }
    if (!user.password) {
      errors.push({
        field: 'password',
        message: 'common.form.required_field',
      });
    }
    if (!user.firstname) {
      errors.push({
        field: 'firstname',
        message: 'common.form.required_field',
      });
    }
    const userAge = Number.parseInt(user.age, 10);
    if (userAge < 13 || userAge > 119) {
      errors.push({
        field: 'age',
        message: 'common.form.age_limit_error',
      });
    }

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
    const { country, language, handleLoginModal } = this.props;
    const { errors, user } = this.state;

    return (
      <RegisterComponent
        country={country}
        language={language}
        errors={errors}
        user={user}
        handleLoginModal={handleLoginModal}
        handleChange={this.handleChange}
        handleSubmit={this.throttleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  const { country, language } = selectConfig(state);

  return { country, language };
};

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
  mapStateToProps,
  mapDispatchToProps
)(RegisterHandler);

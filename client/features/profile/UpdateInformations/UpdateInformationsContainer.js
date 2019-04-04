import React, { Component } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { getAgeFromDateOfBrth } from 'Shared/helpers/date';
import * as UserService from 'Shared/services/User';
import {
  type User,
  type UserInformationForm,
  type UserInformationFormErrors,
} from 'Shared/types/user';
import { getUser } from 'Shared/store/actions/authentification';
import { UpdateInformationsComponent } from './UpdateInformationsComponent';

type Props = {
  user: User,
};
type State = {
  submitDone: boolean,
  submitError: boolean,
  values: UserInformationForm,
  errors: UserInformationFormErrors,
};

const validateForm = ({ firstName }) => {
  return {
    firstName:
      !firstName || firstName.trim().length === 0
        ? i18n.t('common.form.required_field')
        : false,
  };
};

class UpdateInformationsHandler extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      submitDone: false,
      submitError: false,
      values: {
        firstName: props.user.firstName || '',
        age: getAgeFromDateOfBrth(props.user.profile.dateOfBirth) || '',
        profession: props.user.profile.profession || '',
        postalCode: props.user.profile.postalCode || '',
        description: props.user.profile.description || '',
      },
      errors: {
        firstName: false,
        age: false,
        profession: false,
        postalCode: false,
        description: false,
      },
    };
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const { values } = this.state;
    this.setState({
      values: {
        ...values,
        [name]: value,
      },
    });
  };

  handleSubmit = async (event: SyntheticInputEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const { values } = this.state;

    const errors = validateForm(values);
    this.setState(prevState => ({
      ...prevState,
      isDone: false,
      hasError: false,
      errors: {
        ...prevState.errors,
        ...errors,
      },
    }));

    const formIsValid = Object.values(errors).reduce(
      (sum, next) => sum && !next,
      true
    );

    if (formIsValid) {
      const { handleGetUser } = this.props;
      try {
        await UserService.update(values);
        this.setState({ submitDone: true });
        handleGetUser();
      } catch {
        this.setState({ submitError: true });
      }
    }
  };

  render() {
    const { values, errors, submitDone, submitError } = this.state;
    return (
      <UpdateInformationsComponent
        values={values}
        errors={errors}
        submitDone={submitDone}
        submitError={submitError}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleGetUser: () => {
    dispatch(getUser());
  },
});

export const UpdateInformationsContainer = connect(
  null,
  mapDispatchToProps
)(UpdateInformationsHandler);

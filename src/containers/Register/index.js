import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/registration';
import RegisterComponent from '../../components/Register';

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        firstname: '',
        age: '',
        postalcode: '',
        profession: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [id]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { user } = this.state;
    const { handleRegister } = this.props;

    if (user.email && user.password && user.firstname) {
      handleRegister(user);
    }
  }

  render() {
    const { user } = this.state;
    const { errors } = this.props;

    return (
      <RegisterComponent
        user={user}
        errors={errors}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { errors } = state.registration;

  return {
    errors
  };
};

const mapDispatchToProps = dispatch => ({
  handleRegister: (user) => {
    dispatch(register(user));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);

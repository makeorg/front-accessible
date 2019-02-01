##### PasswordInput Example :
```js
const { faLock } = require('@fortawesome/free-solid-svg-icons');

class PasswordInputExample extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
      passwordIsDisplayed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.togglePasswordIsDisplayed =  this.togglePasswordIsDisplayed.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      value
    });
  }

  togglePasswordIsDisplayed(event) {
    this.setState(prevstate => ({
      passwordIsDisplayed: !prevstate.passwordIsDisplayed
    }));
  }

  render() {
    return (
      <PasswordInput
        type={this.state.passwordIsDisplayed ? "text" : "password"}
        name="password"
        icon={faLock}
        value={this.state.value}
        label="placeholder"
        handleChange={this.handleChange}
        passwordIsDisplayed={this.state.passwordIsDisplayed}
        togglePasswordIsDisplayed={this.togglePasswordIsDisplayed}
      />
    )
  }
}
;<PasswordInputExample />


```
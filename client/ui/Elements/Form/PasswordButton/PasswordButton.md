##### PasswordButton Example :
```js
const { faEye, faEyeSlash } = require('@fortawesome/free-solid-svg-icons');

class PasswordButtonExample extends React.Component {
  constructor() {
    super()
    this.state = {
      passwordIsDisplayed: false
    }
    this.togglePasswordIsDisplayed =  this.togglePasswordIsDisplayed.bind(this);
  }

  togglePasswordIsDisplayed(event) {
    this.setState(prevstate => ({
      passwordIsDisplayed: !prevstate.passwordIsDisplayed
    }));
  }

  render() {
    return (
      <PasswordButton
        passwordIsDisplayed={this.state.passwordIsDisplayed}
        togglePasswordIsDisplayed={this.togglePasswordIsDisplayed}
      />
    )
  }
}
;<PasswordButtonExample />


```
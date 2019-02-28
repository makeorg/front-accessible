##### PasswordInput Example :

```js
const { faLock } = require('@fortawesome/free-solid-svg-icons');

class PasswordInputExample extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      value,
    });
  }

  render() {
    return (
      <PasswordInput
        type={this.state.passwordIsDisplayed ? 'text' : 'password'}
        name="password"
        icon={faLock}
        value={this.state.value}
        label="placeholder"
        handleChange={this.handleChange}
      />
    );
  }
}
<PasswordInputExample />;
```

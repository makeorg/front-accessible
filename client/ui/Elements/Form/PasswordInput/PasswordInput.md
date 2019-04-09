##### PasswordInput Example :

```js
const { SvgLock } = require('../../../Svg/elements');

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
        icon={<SvgLock />}
        value={this.state.value}
        label="placeholder"
        handleChange={this.handleChange}
      />
    );
  }
}
<PasswordInputExample />;
```

##### PasswordInput Example :

```jsx
import { SvgLock } from '../../../Svg/elements';
import { PasswordInput } from './index';

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
        icon={<SvgLock aria-hidden focusable="false" />}
        value={this.state.value}
        label="placeholder"
        handleChange={this.handleChange}
      />
    );
  }
}
<PasswordInputExample />;
```

##### UntypedInput Example :
```jsx
import { SvgEnvelope } from '../../../Svg/elements';
import { UntypedInput } from './index';

class UntypedInputExample extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    const { value } = event.target;
    this.setState({
      value
    });
  }

  render() {
    return (
      <UntypedInput
        type="email"
        name="email"
        icon={<SvgEnvelope aria-hidden />}
        value={this.state.value}
        label="placeholder"
        handleChange={this.handleChange}
      />
    )
  }
}
;<UntypedInputExample />


```
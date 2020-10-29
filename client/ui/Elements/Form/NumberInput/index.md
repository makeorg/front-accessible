##### NumberInput Example :
```jsx
import { SvgChild } from '../../../Svg/elements';
import { NumberInput } from './index';

class NumberInputExample extends React.Component {
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
      <NumberInput
        name="age"
        icon={<SvgChild aria-hidden focusable="false" />}
        value={this.state.value}
        label="placeholder"
        handleChange={this.handleChange}
      />
    )
  }
}
;<NumberInputExample />


```
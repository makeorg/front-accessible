##### CustomPatternInput Example :
```jsx
import { SvgMapMarker } from '../../../Svg/elements';
import { CustomPatternInput } from './index';

class CustomPatternInputExample extends React.Component {
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
      <CustomPatternInput
        type="text"
        name="postalcode"
        icon={<SvgMapMarker />}
        value={this.state.value}
        label="code postal"
        handleChange={this.handleChange}
        maxLength={5}
        pattern="^[0-9]{5}"
      />
    )
  }
}
;<CustomPatternInputExample />


```
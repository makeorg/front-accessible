##### UntypedInput Example :
```js
const { faEnvelope } = require('@fortawesome/free-regular-svg-icons');

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
        icon={faEnvelope}
        value={this.state.value}
        label="placeholder"
        handleChange={this.handleChange}
      />
    )
  }
}
;<UntypedInputExample />


```
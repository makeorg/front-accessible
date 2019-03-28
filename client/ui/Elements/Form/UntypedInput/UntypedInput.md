##### UntypedInput Example :
```js
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
        icon="SvgEnvelope"
        value={this.state.value}
        label="placeholder"
        handleChange={this.handleChange}
      />
    )
  }
}
;<UntypedInputExample />


```
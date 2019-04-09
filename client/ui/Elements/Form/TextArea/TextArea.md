##### TextArea Example :
```js
const { SvgPencil } = require('../../../Svg/elements');

class TextAreaExample extends React.Component {
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
      <TextArea
        name="biography"
        icon={<SvgPencil />}
        value={this.state.value}
        label="textarea placeholder"
        handleChange={this.handleChange}
      />
    )
  }
}
;<TextAreaExample />


```
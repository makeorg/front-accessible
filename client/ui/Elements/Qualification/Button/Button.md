##### Qualification Button Example :
```js
import { QualificationButtonElement } from './index';

class QualificationButtonElementExample extends React.Component {
  constructor() {
    super()
    this.state = {
      isQualified: false
    }
    this.handleQualification =  this.handleQualification.bind(this);
  }

  handleQualification(event) {
    this.setState(prevstate => ({
      isQualified: !prevstate.isQualified
    }));
  }

  render() {
    return (
      <div style={{ maxWidth: '250px' }}>
        <QualificationButtonElement
          color="rgb(110, 182, 32)"
          isQualified={this.state.isQualified}
          label="label"
          qualificationCounter="1"
          handleQualification={this.handleQualification}
        />
      </div>
    );
  }
}
;<QualificationButtonElementExample />


```
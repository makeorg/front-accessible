##### Qualification Button Example :
###### Not Qualified Button
```jsx
import { QualificationButtonElement } from './index';

class QualificationButtonElementExample extends React.Component {
  constructor() {
    super()
    this.state = {
      isQualified: false
    }
    this.handleQualificationClick =  this.handleQualificationClick.bind(this);
  }

  handleQualificationClick(event) {
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
          handleClick={this.handleQualificationClick}
        />
      </div>
    );
  }
}
;<QualificationButtonElementExample />

```

###### Qualified Button
```jsx
import { QualificationButtonElement } from './index';

<div style={{ maxWidth: '250px' }}>
  <QualificationButtonElement
    color="rgb(110, 182, 32)"
    isQualified={true}
    label="Réalisable"
    qualificationCounter="13"
  />
</div>

```

###### List of qualification
```jsx
import { voteStaticParams } from '../../../../../shared/constants/vote';
import { i18n } from '../../../../../shared/i18n';
import { QualificationButtonElement } from './index';

const votedKey = 'disagree';

const qualifications = [{
  qualificationKey:"noWay",
  count:1,
  hasQualified:true
},{
  qualificationKey:"impossible",
  count:0,
  countVerified:0,
  hasQualified:false
},{
  qualificationKey:"platitudeDisagree",
  count:0,
  hasQualified:false
}];

<div style={{ maxWidth: '250px' }}>
  {qualifications.map(qualification => (
    <QualificationButtonElement
      color={voteStaticParams[votedKey].color}
      label={i18n.t(`qualification.${qualification.qualificationKey}`)}
      qualificationCounter={qualification.count}
      isQualified={qualification.hasQualified}
    />
  ))}
</div>
```
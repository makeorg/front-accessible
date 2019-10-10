# Feature flipping

Activate and deactivate features depending ```Question.activeFeatures``` values (see [Question type](https://gitlab.com/makeorg/platform/front-accessible/blob/preproduction/shared/types/question.js#L114)).

## Adding a new feature

Declare the new feature by adding the feature slug to ```features``` in [client/helper/featureFlipping.js](https://gitlab.com/makeorg/platform/front-accessible/tree/preproduction/client/helper/featureFlipping.js)

``` javascript
  const features = ['feature1', 'feature2', 'my-new-feature'];
```

**Note:**  the goal of features declaration is to ensure that no deprecated feature flip are present in code. A warn log is emitted for undeclared features.
{: .note}


## Using feature flipping in components

**Import** ```getIsActiveFeature(activeFeatures: string[]): isActiveFeatureFunction``` 
``` javascript
import { getIsActiveFeature } from 'Client/helper/featureFlipping'
```

**Define** ```isActiveFeature``` using React hooks
``` javascript
const [isActiveFeature, setFeatureFlipping] = useState(() => () => false);
useEffect(() => {
  setFeatureFlipping(() => getIsActiveFeature(question.activeFeatures));
}, [question]);
```

**Use** ```isActiveFeature```
``` javascript
return (
  <firstComponent />
  { isActiveFeature('my-feature-slug') && (<MyFeatureComponent/>) }
  <lastComponent />>
);
```
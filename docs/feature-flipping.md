# Feature flipping

Activate and deactivate features depending ``question.activeFeatures``` values (see [Question type](https://gitlab.com/makeorg/platform/front-accessible/blob/preproduction/shared/types/question.js#L114)).

## Adding a new feature

Declare the new feature by adding the feature slug to ```features``` in [client/helper/featureFlipping.js](https://gitlab.com/makeorg/platform/front-accessible/tree/preproduction/client/helper/featureFlipping.js)

``` javascript
  const features = ['feature1', 'feature2', 'my-new-feature'];
```

**Note:**  the goal of features declaration is to ensure that no deprecated feature flip are present in code. A warn log is emitted for undeclared features.
{: .note}


## Using feature flipping in components
To avoid code duplication, we isolate the logic in the component

**Create your feature component** and check if the feature is activated in the question with ```checkIsFeatureActivated```
``` javascript
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping'

export const MyFeatureComponent = ({ question }: Props) = {
  const isTheFeaturedActivated  = checkIsFeatureActivated(
    NAME_OF_THE_ACTIVED_FEATURED,
      question.activeFeatures
  )

  if(!isTheFeaturedActivated) {
    return null;
  }

  return(
   <>
    My Feature component
   </>
  )
}
```

**Use** ```isActiveFeature```
``` javascript
return (
  <firstComponent />
  <MyFeatureComponent question={question} />
  <lastComponent />>
);
```
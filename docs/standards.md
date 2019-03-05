# Project Standards

## Javascript

---

- Do not use `export default`

  - [Why we have banned default exports in Js](https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad)
  - [Eslint Rule no-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md)

- Use `undefined` instead of `null` for unset values

  - Variables that aren't initialized are always undefined.
  - [[Cf. Flow]](#typing-flow) Use undefined will avoid usage of the ugly [Maybe types](https://flow.org/en/docs/types/maybe/) `value?: ?string;`

  - [Null vs. Undefined](https://codeburst.io/javascript-null-vs-undefined-20f955215a2)
  - [Stackoverflow](https://stackoverflow.com/questions/6604749/what-reason-is-there-to-use-null-instead-of-undefined-in-javascript)
    - If you want to write javascript that isn't awful, always use triple equals === and never use null (use undefined instead).
    - **It'll make your life way easier.**

## [React](https://reactjs.org/)

---

### [COMPONENTS](https://reactjs.org/docs/components-and-props.html)

- Use [Functional](https://reactjs.org/docs/components-and-props.html#functional-and-class-components) component by default
- Use [Class](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class) component only in this 2 use cases
  - I really need a local [State](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly) without redux
  - I really need to use Lifecycle or an handle event methods with params inside my component
- Declare State with [class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/) rather than in the constructor:

```javascript
class MyComp extends React.Component{
    state = {
        value: undefined
    }
    render(){
    ...
}
```

- Do not use .bind in constructor. Use [class fields syntax] instead(https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers)

```javascript
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // This is *experimental* syntax but avalaible in Create React App.
  handleClick = () => {
    console.log('this is:', this);
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

- Do not use [deprecated Lifecycle methods](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
  - :warning: componentWillMount
  - :warning: componentWillReceiveProps
  - :warning: componentWillUpdate

## Typing (Flow)

---

- [Use union types](https://flow.org/en/docs/types/utilities/#toc-keys) instead of const (it's like enums)
- Some types are **unsafe and should be avoided :**
  - [Function](https://flow.org/en/docs/types/functions/) use `() => void` instead
  - [Object](https://flow.org/en/docs/types/objects/) use [Type Aliases](https://flow.org/en/docs/types/aliases/) or [typeof](https://flow.org/en/docs/types/typeof/) instead
  - [Array](https://flow.org/en/docs/types/arrays/) without inside types `number[]` `string[]`
    `Array<OtherType>` etc..
- Do not use [Maybe types](https://flow.org/en/docs/types/maybe/) `value?: ?string;` use undefined instead of null

**Good :**

```ts
type Toto = {
  value?: string;
};

const toto: Toto = {
  value: undefined,
};
```

**Bad :**

```ts
type Toto = {
  value?: ?string;
}

const toto: Toto = {
  value: null
};
```

## Redux

---

- Use FSA (Flux Standard Action)
  https://github.com/redux-utilities/flux-standard-action#design-goals

      **Success**
      ```js
      {
          type: 'ADD_TODO',
          payload: {
              anything: 'Do something.'
          }
      }
      ```

      **Error**
      ```js
      {
          type: 'ADD_TODO',
          payload: new Error(),
          error: true
      }
      ```

## CSS:

---

- All Styled component must be Suffix by `Style`:

```
const PasswordRecoveryStyle = styled.section`
```

- Use a MOBILE-FIRST approach is better for performance:

Good:

```
@media (min-width: ${pxToRem(Breakpoints.Desktop)})
```

Bad:

```
@media (max-width: ${pxToRem(Breakpoints.Desktop)})
```

## TODO:

- [ ] update all redux Action with FSA standard
- [ ] remove all .bind in constructor
- [ ] activate [React.StrictMode](https://reactjs.org/docs/strict-mode.html) on App

## TESTS: `

#### JEST snippets

- spyOn

```js
const response = httpMocks.createResponse();
jest.spyOn(response, 'redirect');
expect(response.redirect).toBeCalledWith('/FR-fr');
```

#### Mocks

- Initialize a local mock

```js
import { UserService } from 'Shared/api/UserService';
jest.mock('Shared/api/UserService');
```

- Initialize a node_modules mock

```js
// inside root/__mocks__/i18next.js
module.exports = {
  init: () => jest.fn(),
  changeLanguage: value => value,
  t: value => value,
};
```

- Resolve a promise

```js
UserService.forgotPassword.mockResolvedValue();

// same as:
// UserService.forgotPassword.mockImplementation(() => Promise.resolve())
```

- Reject a promise

```js
UserService.forgotPassword.mockRejectedValue();

// same as:
// UserService.forgotPassword.mockImplementation(() => Promise.reject())
```

### UI test strategy

- A client/ui Style component should be tested using snapshot

```ts
import React from 'react';
import renderer from 'react-test-renderer';
import { ComponentStyle } from './index';

describe('ComponentStyle', () => {
  it('snapshot by default', () => {
    const component = renderer.create(<ComponentStyle />).toJSON();
    expect(component).toMatchSnapshot();
  });

  // you can also secure important props with toHaveStyleRule
  it('must set color from props', () => {
    const component = renderer.create(<ComponentStyle color="red" />).toJSON();
    expect(component).toHaveStyleRule('color', 'red');
    expect(component).toHaveStyleRule('background-color', 'red', {
      modifier: ':active',
    });
  });
});
```

- A client/ui component (without style) should be tested using snapshot-diff and jest.mock

```ts
import { Component } from './index';
import { ComponentStyle } from './Styled';

jest.mock('./Styled', () => ({
  ComponentStyle: 'ComponentStyle',
}));

describe('Component', () => {
  it('must match the snapshot with default Props', () => {
    const component = renderer.create(<Component />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot on color props', () => {
    const ComponentOne = renderer.create(<Component color="red" />).toJSON();
    const ComponentTwo = renderer.create(<Component color="green" />).toJSON();
    expect(snapshotDiff(ComponentOne, ComponentTwo)).toMatchSnapshot();
  });
});
```

### Features test strategy

- Code inside **root/client/features** must be tested with [Cypress](https://www.cypress.io/) in priority

## Conception

[KISS principle](https://en.wikipedia.org/wiki/KISS_principle) Keep it simple, stupid

**Design Pattern**: Design patterns are reusable solutions to commonly occurring problems in software design. They are both exciting and a fascinating topic to explore in any programming language.

Sources:

- Article: [Javascript design patterns](https://medium.com/beginners-guide-to-mobile-web-development/javascript-design-patterns-25f0faaaa15)
- Book: [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

### [Singleton Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript): The Singleton pattern is thus known because it restricts instantiation of a class to a single object.

```ts
// ApiService.js
class ApiClassService {}
export const ApiService = new ApiClassService();
// other.js
import { ApiService } from './ApiService';
// ApiService is now a singleton on all the app
```

### [Strategy pattern](https://robdodson.me/javascript-design-patterns-strategy/): Encapsulates an algorithm inside a class separating the selection from the implementation.

Usage:

```ts
class ApiService {
  _strategy: IApiServiceStrategy;

  set strategy(strategy: IApiServiceStrategy) {
    this._strategy = strategy;
  }

  get strategy() {
    if (!this._strategy) {
      throw new Error('No ApiService strategy configured');
    }
    return this._strategy;
  }

  callApi(url: string) {
    return this.strategy.callApi(url);
  }
}

class ApiServiceServer implements IApiServiceStrategy {
  // eslint-disable-next-line class-methods-use-this
  callApi(url: string) {
    console.log('ApiServiceServer call ', url);
  }
}

class ApiServiceClient implements IApiServiceStrategy {
  // eslint-disable-next-line class-methods-use-this
  callApi(url: string) {
    console.log('ApiServiceClient call ', url);
  }
}

const apiService = new ApiService();

apiService.strategy = new ApiServiceServer();
apiService.callApi(url); // console.log ->  ApiServiceServer call

apiService.strategy = new ApiServiceClient();
apiService.callApi(url); // console.log -> ApiServiceClient call
```

## Svg

## Add an SVG to the project (and use it)

1. copy your .svg file into `/client/ui/Svg/svgr`
2. in the terminal, run `yarn svg`
4. Export the created component in `/client/ui/Svg/elements/index.js`
5. import it `import { Svg } from 'Client/ui/Svg';`
6. Use it `<Svg type="SvgEmptyAvatar" />`


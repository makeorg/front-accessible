# Project Standards 

## Javascript
___ 
- Do not use `export default`

    - [Why we have banned default exports in Js](https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad)
    - [Eslint Rule no-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md)

- Use `undefined` instead of `null` for unset values
    - Variables that aren't initialized are always undefined.
    - [[Cf. Flow]](#typing-flow) Use undefined will avoid usage of the ugly [Maybe types](https://flow.org/en/docs/types/maybe/) `value?: ?string;`

  - [Null vs. Undefined](https://codeburst.io/javascript-null-vs-undefined-20f955215a2)
  - [Stackoverflow](https://stackoverflow.com/questions/6604749/what-reason-is-there-to-use-null-instead-of-undefined-in-javascript)
    -  If you want to write javascript that isn't awful, always use triple equals === and never use null (use undefined instead). 
    - **It'll make your life way easier.**
## [React](https://reactjs.org/)
___ 

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
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```
- Do not use [deprecated Lifecycle methods](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
  - :warning: componentWillMount
  - :warning: componentWillReceiveProps
  - :warning: componentWillUpdate


## Typing (Flow)
___ 
- [Use union types](https://flow.org/en/docs/types/utilities/#toc-keys) instead of const (it's like enums)
- Some types are **unsafe and should be avoided :** 
    - [Function](https://flow.org/en/docs/types/functions/) use `() => void` instead
    - [Object](https://flow.org/en/docs/types/objects/) use [Type Aliases](https://flow.org/en/docs/types/aliases/) or [typeof](https://flow.org/en/docs/types/typeof/) instead
    - [Array](https://flow.org/en/docs/types/arrays/) without inside types  `number[]` `string[]`
    `Array<OtherType>` etc..
- Do not use [Maybe types](https://flow.org/en/docs/types/maybe/) `value?: ?string;` use undefined instead of null

**Good :**
```ts
type Toto = {
  value?: string;
}

const toto: Toto = {
  value: undefined
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
___ 
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
___
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
- [ ] remove all export default
- [ ] update all redux Action with FSA standard
- [ ] remove all .bind in constructor
- [ ] activate [React.StrictMode](https://reactjs.org/docs/strict-mode.html) on App

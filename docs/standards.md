# Project Standards 

## Javascript
___ 
- Do not use export default

    - [Why we have banned default exports in Js](https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad)
    - [Eslint Rule no-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md)

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
- [Use union types](https://flow.org/en/docs/types/utilities/#toc-keys) it's like enums

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

## TODO:
- [ ] remove all export default
- [ ] update all redux Action with FSA standard
- [ ] remove all .bind in constructor
- [ ] activate [React.StrictMode](https://reactjs.org/docs/strict-mode.html) on App

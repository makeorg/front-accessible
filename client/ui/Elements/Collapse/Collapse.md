##### Default Collapse Example :
```js
class CollapseExample extends React.Component {
  render() {
    return (
      <Collapse title="Collapse Title">
      Collapse content
      </Collapse>
    );
  }
}
;<CollapseExample />
```

##### Soft Expand Collapse Example :
```js
class CollapseExample extends React.Component {
  render() {
    return (
      <Collapse 
        title="Collapse Title"
        softExpand
      >
      Collapse content
      </Collapse>
    );
  }
}
;<CollapseExample />
```

##### Force Expand Collapse Example :
```js
class CollapseExample extends React.Component {
  render() {
    return (
      <Collapse 
        title="Collapse Title"
        forceExpand
      >
      Collapse content
      </Collapse>
    );
  }
}
;<CollapseExample />
```
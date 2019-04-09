##### Default Avatar Example :
```js
class AvatarExample extends React.Component {
  render() {
    return (
      <Avatar />
    );
  }
}
;<AvatarExample />
```

##### Custom Avatar Example :
```js
class AvatarExample extends React.Component {
  render() {
    return (
      <Avatar avatarSize={200}>
        <img src="https://pbs.twimg.com/profile_images/774660692246949888/Jq9fGs3-_400x400.jpg" alt="Axel Dauchez - CEO Make.org" />
      </Avatar>
    );
  }
}
;<AvatarExample />
```
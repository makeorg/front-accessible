##### Tile With Title Example :
```js
class TileWithTitleExample extends React.Component {
  render() {
    return (
        <div style={{maxWidth: '380px', padding: '25px 10px', background:'#eeeeee'}}>
          <TileWithTitle title="Title of the tile">Sidebar children to render as content</TileWithTitle>
        </div>
    );
  }
}
;<TileWithTitleExample />
```
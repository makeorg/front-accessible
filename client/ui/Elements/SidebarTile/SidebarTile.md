##### Sidebar Tile Example :
```js
class SidebarTileExample extends React.Component {
  render() {
    return (
        <div style={{maxWidth: '380px', padding: '25px 10px', background:'#eeeeee'}}>
          <SidebarTile title="Title of the tile">Sidebar children to render as content</SidebarTile>
        </div>
    );
  }
}
;<SidebarTileExample />
```
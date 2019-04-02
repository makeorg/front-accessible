##### Tabs Example :
```js
class TabsExample extends React.Component {
  render() {
    const tabsContent = [
      {
        tab: 'First Tab',
        panel: 'First Tab Panel Content',
      },
      {
        tab: 'Second Tab',
        panel: 'Second Tab Panel Content',
      },
    ];

    return (
      <Tabs
        tabsContent={tabsContent}
      />
    )
  }
}
;<TabsExample />
```
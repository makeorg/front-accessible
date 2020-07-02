#### Default Colors

```jsx
import * as colors from '../client/app/assets/vars/Colors';
import styled from 'styled-components';
import {StartColumnStyle, FlexWrapElementStyle, CenterRowStyle, SpaceBetweenRowStyle} from '../client/ui/Elements/FlexElements';

//create box style for color input
const BoxStyle = ({color}) => {
  const styles = {
  width: `25px`,
  height: `25px`,
  border: `1px solid`,
  margin: `5px`,
  backgroundColor: color,
  };
  return(
    <div style={styles}></div>
  )
};

//create element style
const ElementStyle = styled(SpaceBetweenRowStyle)`
  flex-wrap: wrap;
  padding: 20px 0px;
`;

//create array with all colors const name as string
const colorGroupNames = [];
for (var colorGroupName in colors) {
  colorGroupNames.push(colorGroupName)
}

//create array with all colors name in const as string
const colorItems = (colorGroup) => {
  const items = []
  for (var colorName in colorGroup) {
    items.push(colorName)
  }
  return items
}
<>
{colorGroupNames.map(colorGroupName => (
  <ul style={{padding: '0px'}}>
  <h4>{colorGroupName}</h4>
  <StartColumnStyle style={{margin: '20px'}}>
      {colorItems(colors[colorGroupName]).map(colorName =>(
      <ElementStyle as="li" key={colorName.id}>
      <BoxStyle color={colors[colorGroupName][colorName]}/>
      <div style={{margin: 'auto'}}>{colorName}</div>
      <div style={{margin: 'auto'}}>{colors[colorGroupName][colorName]}</div>
      </ElementStyle>
      ))}
  </StartColumnStyle>
  </ul>
))}
</>


```
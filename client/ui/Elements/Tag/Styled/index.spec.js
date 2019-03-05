import React from 'react';
import renderer from 'react-test-renderer';
import { TagStyle } from './index';

describe('ComponentStyle', () => {
  it('snapshot by default', () => {
    const component = renderer.create(<TagStyle>Hello</TagStyle>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must set color from props', () => {
    const component = renderer
      .create(
        <TagStyle color="black" backgroundColor="blue">
          Hello
        </TagStyle>
      )
      .toJSON();
    expect(component).toHaveStyleRule('color', 'black');
    expect(component).toHaveStyleRule('background-color', 'blue');
  });
});

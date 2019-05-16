import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonStyle, QualifyButtonStyle } from './index';

describe('ButtonStyle', () => {
  it('snapshot by default', () => {
    const component = renderer.create(<ButtonStyle />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must set border-color from props', () => {
    const component = renderer.create(<ButtonStyle color="red" />).toJSON();
    expect(component).toHaveStyleRule('border-color', 'red');
  });
});

describe('QualifyButtonStyle', () => {
  it('snapshot by default', () => {
    const component = renderer.create(<QualifyButtonStyle />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must set color from props', () => {
    const component = renderer
      .create(<QualifyButtonStyle color="red" />)
      .toJSON();
    expect(component).toHaveStyleRule('color', 'red');
    expect(component).not.toHaveStyleRule('background-color', 'red', {
      modifier: ':focus',
    });
    expect(component).not.toHaveStyleRule('background-color', 'red', {
      modifier: ':active',
    });
  });
});

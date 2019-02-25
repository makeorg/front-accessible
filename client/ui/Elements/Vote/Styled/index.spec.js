import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonStyle, UnvoteButtonStyle, VoteButtonStyle } from './index';

describe('ButtonStyle', () => {
  it('snapshot by default', () => {
    const component = renderer.create(<ButtonStyle />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must set rotate from props', () => {
    const component = renderer.create(<ButtonStyle rotate={90} />).toJSON();
    expect(component).toHaveStyleRule('transform', 'rotate(90deg)');
  });

  it('must not set rotate from props', () => {
    const component = renderer.create(<ButtonStyle rotate={0} />).toJSON();
    expect(component).not.toHaveStyleRule('transform', 'rotate(0deg)');
  });

  it('must set border-color from props', () => {
    const component = renderer.create(<ButtonStyle color="red" />).toJSON();
    expect(component).toHaveStyleRule('border-color', 'red');
  });
});

describe('UnvoteButtonStyle', () => {
  it('snapshot by default', () => {
    const component = renderer.create(<UnvoteButtonStyle />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must set background-color from props', () => {
    const component = renderer
      .create(<UnvoteButtonStyle color="red" />)
      .toJSON();
    expect(component).toHaveStyleRule('background-color', 'red');
  });
});

describe('VoteButtonStyle', () => {
  it('snapshot by default', () => {
    const component = renderer.create(<VoteButtonStyle />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must set color from props', () => {
    const component = renderer.create(<VoteButtonStyle color="red" />).toJSON();
    expect(component).toHaveStyleRule('color', 'red');
    expect(component).toHaveStyleRule('background-color', 'red', {
      modifier: ':focus',
    });
    expect(component).toHaveStyleRule('background-color', 'red', {
      modifier: ':active',
    });
  });
});

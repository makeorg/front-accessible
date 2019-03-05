import React from 'react';
import renderer from 'react-test-renderer';
import { CardStyle } from './index';

describe('CardStyle', () => {
  it('snapshot by default', () => {
    const component = renderer.create(<CardStyle />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

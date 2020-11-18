import React from 'react';
import renderer from 'react-test-renderer';
import { Colors } from './index';

describe('Colors', () => {
  it('must match the snapshot with default Props', () => {
    const component = renderer.create(<Colors />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

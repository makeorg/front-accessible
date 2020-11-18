import React from 'react';
import renderer from 'react-test-renderer';
import { FontSize } from './index';

describe('Fonts', () => {
  it('must match the snapshot with default Props', () => {
    const component = renderer.create(<FontSize />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

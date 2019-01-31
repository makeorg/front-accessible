import React from 'react';
import renderer from 'react-test-renderer';
import { ProgressCircleComponent } from '.';

describe('ProgressCircleComponent', () => {
  it('toMatchSnapshot', () => {
    const component = renderer.create(
      <ProgressCircleComponent />
    );
    expect(component).toMatchSnapshot();
  });
});

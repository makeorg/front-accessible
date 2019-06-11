import React from 'react';
import renderer from 'react-test-renderer';
import { ProgressCircleComponent } from '.';

describe('ProgressCircleComponent', () => {
  it('toMatchSnapshot', () => {
    const component = renderer
      .create(
        <ProgressCircleComponent index={2} cardsCount={12} cardOffset={1} />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

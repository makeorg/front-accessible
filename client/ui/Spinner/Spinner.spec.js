import React from 'react';
import renderer from 'react-test-renderer';
import { Spinner } from './index';

describe('PasswordButton', () => {
  it('must match the snapshot with default Props', () => {
    const component = renderer.create(
      <Spinner />
    );
    expect(component).toMatchSnapshot();
  });
});

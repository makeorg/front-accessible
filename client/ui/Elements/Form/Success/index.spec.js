import React from 'react';
import renderer from 'react-test-renderer';
import { FormSuccessMessage } from './index';

jest.mock('Client/ui/Svg/elements', () => ({
  SvgCheck: 'SvgCheck',
}));

describe('FormSuccessMessage', () => {
  it('must match the snapshot', () => {
    const component = renderer.create(<FormSuccessMessage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

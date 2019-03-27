import React from 'react';
import renderer from 'react-test-renderer';
import { Avatar } from './index';

jest.mock('Client/ui/Svg/elements', () => ({
  SvgEmptyAvatar: 'SvgEmptyAvatar',
}));

describe('Avatar', () => {
  it('snapshot by default', () => {
    const component = renderer.create(<Avatar />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

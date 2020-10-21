import React from 'react';
import renderer from 'react-test-renderer';
import { Tip } from './index';

jest.mock('./style', () => ({
  TipWrapperStyle: 'TipWrapperStyle',
  TipCrossStyle: 'TipCrossStyle',
  TriangleStyle: 'TriangleStyle',
  LinkStyle: 'LinkStyle',
  TipContainerStyle: 'TipContainerStyle',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgClose: 'SvgClose',
}));

jest.mock('../AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

describe('TagTooltip', () => {
  it('must match the snapshot with default Props', () => {
    const component = renderer.create(<Tip />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

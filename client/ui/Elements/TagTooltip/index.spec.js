import React from 'react';
import renderer from 'react-test-renderer';
import { TagTooltip } from './index';

jest.mock('./style', () => ({
  TagsTooltipWrapperStyle: 'TagsTooltipWrapperStyle',
  TagsTooltipCrossStyle: 'TagsTooltipCrossStyle',
  TriangleUpStyle: 'TriangleUpStyle',
  TriangleDownStyle: 'TriangleDownStyle',
  LinkStyle: 'LinkStyle',
  TagsTooltipContainerStyle: 'TagsTooltipContainerStyle',
  TooltipSvgInfos: 'TooltipSvgInfos',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgClose: 'SvgClose',
}));

jest.mock('../AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

describe('TagTooltip', () => {
  it('must match the snapshot with default Props', () => {
    const component = renderer.create(<TagTooltip />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

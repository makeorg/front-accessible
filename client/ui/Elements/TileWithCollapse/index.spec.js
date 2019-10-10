import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { TileWithCollapse } from './index';

jest.mock('Client/ui/Elements/CollapseElements', () => ({
  TileWithCollapseWrapperStyle: 'TileWithCollapseWrapperStyle',
  CollapseTriggerStyle: 'CollapseTriggerStyle',
  CollapseIconStyle: 'CollapseIconStyle',
  CollapseContentStyle: 'CollapseContentStyle',
  TileWithCollapseSeparatorStyle: 'TileWithCollapseSeparatorStyle',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgAngleArrowRight: 'SvgAngleArrowRight',
}));

describe('Collapse', () => {
  const defaultProps = {
    title: 'foo',
    children: 'bar',
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<TileWithCollapse {...defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must match the diff snapshot between Expand vs TileWithCollapse Props', () => {
    const expandedComponent = renderer
      .create(<TileWithCollapse {...defaultProps} softExpand />)
      .toJSON();
    const defaultTileWithCollapse = renderer
      .create(<TileWithCollapse {...defaultProps} />)
      .toJSON();
    expect(
      snapshotDiff(expandedComponent, defaultTileWithCollapse)
    ).toMatchSnapshot();
  });

  it('must match the diff snapshot between forceExpandOnDesktop vs default Props', () => {
    const forceExpandOnDesktop = renderer
      .create(<TileWithCollapse {...defaultProps} forceExpandOnDesktop />)
      .toJSON();
    const defaultTileWithCollapse = renderer
      .create(<TileWithCollapse {...defaultProps} />)
      .toJSON();
    expect(
      snapshotDiff(forceExpandOnDesktop, defaultTileWithCollapse)
    ).toMatchSnapshot();
  });
});

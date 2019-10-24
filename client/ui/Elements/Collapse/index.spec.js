import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { Collapse } from './index';

jest.mock('Client/ui/Elements/CollapseElements', () => ({
  TileWithCollapseWrapperStyle: 'TileWithCollapseWrapperStyle',
  CollapseWrapperStyle: 'TileSeparatorStyle',
  CollapseTriggerStyle: 'CollapseTriggerStyle',
  CollapseIconStyle: 'CollapseIconStyle',
  CollapseContentStyle: 'CollapseContentStyle',
  CollapseSeparatorStyle: 'CollapseSeparatorStyle',
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
    const component = renderer.create(<Collapse {...defaultProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must match the diff snapshot between Expand vs Collapse Props', () => {
    const expandedComponent = renderer
      .create(<Collapse {...defaultProps} open />)
      .toJSON();
    const defaultCollapse = renderer
      .create(<Collapse {...defaultProps} />)
      .toJSON();
    expect(snapshotDiff(expandedComponent, defaultCollapse)).toMatchSnapshot();
  });

  it('must match the diff snapshot between Tile vs default Collapse Style', () => {
    const collapseWithTile = renderer
      .create(<Collapse {...defaultProps} withTileStyle />)
      .toJSON();
    const defaultCollapse = renderer
      .create(<Collapse {...defaultProps} />)
      .toJSON();
    expect(snapshotDiff(collapseWithTile, defaultCollapse)).toMatchSnapshot();
  });
});

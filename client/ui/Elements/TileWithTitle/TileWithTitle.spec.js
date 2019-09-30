import React from 'react';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';
import { SvgInfos } from 'Client/ui/Svg/elements';
import { TileWithTitle } from './index';

jest.mock('Client/ui/Elements/TileWithTitle/Styled', () => ({
  TileWithTitleStyle: 'TileWithTitleStyle',
  TileTitleStyle: 'TileTitleStyle',
  TileSeparatorStyle: 'TileSeparatorStyle',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgInfos: 'SvgInfos',
}));

describe('TileWithTitle', () => {
  const defaultProps = {
    title: 'foo',
    children: 'bar',
  };

  const iconProps = {
    title: 'foo',
    children: 'bar',
    icon: <SvgInfos />,
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<TileWithTitle {...defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must match the diff snapshot between default vs with Icon', () => {
    const defaultTile = renderer
      .create(<TileWithTitle {...defaultProps} />)
      .toJSON();
    const withIconTile = renderer
      .create(<TileWithTitle {...iconProps} />)
      .toJSON();
    expect(snapshotDiff(defaultTile, withIconTile)).toMatchSnapshot();
  });
});

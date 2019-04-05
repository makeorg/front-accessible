import React from 'react';
import renderer from 'react-test-renderer';
import { TileWithTitle } from './index';

jest.mock('Client/ui/Elements/TileWithTitle/Styled', () => ({
  TileWithTitleStyle: 'TileWithTitleStyle',
  TileSeparatorStyle: 'TileSeparatorStyle',
}));

jest.mock('Client/ui/Elements/TitleElements', () => ({
  ThirdLevelTitleStyle: 'ThirdLevelTitleStyle',
}));

describe('TileWithTitle', () => {
  const defaultProps = {
    title: 'foo',
    children: 'bar',
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<TileWithTitle {...defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

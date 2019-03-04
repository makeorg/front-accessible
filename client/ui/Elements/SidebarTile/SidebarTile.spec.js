import React from 'react';
import renderer from 'react-test-renderer';
import { SidebarTile } from './index';

jest.mock('Client/ui/Elements/SidebarTile/Styled', () => ({
  SidebarTileStyle: 'SidebarTileStyle',
  SidebarSeparatorStyle: 'SidebarSeparatorStyle',
}));

jest.mock('Client/ui/Elements/TitleElements', () => ({
  ThirdLevelTtitleStyle: 'ThirdLevelTtitleStyle',
}));

describe('SidebarTile', () => {
  const defaultProps = {
    title: 'foo',
    children: 'bar',
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<SidebarTile {...defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

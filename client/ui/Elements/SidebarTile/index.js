import React from 'react';
import { ThirdLevelTtitleStyle } from 'Client/ui/Elements/TitleElements';
import { SidebarTileStyle, SidebarSeparatorStyle } from './Styled';

type Props = {
  /** Title of the tile */
  title: string,
  /** Chidlren to render */
  children: React.Node,
};

export const SidebarTile = (props: Props) => {
  const { title, children } = props;
  return (
    <SidebarTileStyle>
      <ThirdLevelTtitleStyle>{title}</ThirdLevelTtitleStyle>
      <SidebarSeparatorStyle />
      {children}
    </SidebarTileStyle>
  );
};

import React from 'react';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { TileWithTitleStyle, TileSeparatorStyle } from './Styled';

type Props = {
  /** Title of the tile */
  title: string,
  /** Chidlren to render */
  children: React.Node,
};

export const TileWithTitle = (props: Props) => {
  const { title, children } = props;
  return (
    <TileWithTitleStyle>
      <FourthLevelTitleStyle as="h3">{title}</FourthLevelTitleStyle>
      <TileSeparatorStyle />
      {children}
    </TileWithTitleStyle>
  );
};

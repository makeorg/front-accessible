import React, { type Node } from 'react';
import {
  TileWithTitleStyle,
  TileTitleStyle,
  TileSeparatorStyle,
} from './Styled';

type Props = {
  /** Title of the tile */
  title: string,
  /** Chidlren to render */
  children: Node,
  /** Optional id for Tile */
  id?: string,
  /** Optional icon as prop to render */
  icon?: Node,
  /** Optional as for Tile */
  as?: string,
};

export const TileWithTitle = ({ title, children, id, icon, as }: Props) => {
  return (
    <TileWithTitleStyle id={id} as={as}>
      <TileTitleStyle as="h3">
        {icon}
        {title}
      </TileTitleStyle>
      <TileSeparatorStyle />
      {children}
    </TileWithTitleStyle>
  );
};

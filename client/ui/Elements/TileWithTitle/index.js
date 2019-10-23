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
};

export const TileWithTitle = ({ title, children, id, icon }: Props) => {
  return (
    <TileWithTitleStyle id={id}>
      <TileTitleStyle as="h3">
        {icon}
        {title}
      </TileTitleStyle>
      <TileSeparatorStyle />
      {children}
    </TileWithTitleStyle>
  );
};

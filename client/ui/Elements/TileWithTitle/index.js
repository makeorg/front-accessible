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
  /** Optional css style */
  style?: Object,
};

export const TileWithTitle = ({
  title,
  children,
  id,
  icon,
  as,
  style,
}: Props) => (
  <TileWithTitleStyle id={id} as={as} style={style}>
    <TileTitleStyle as="h3">
      {icon}
      {title}
    </TileTitleStyle>
    <TileSeparatorStyle />
    {children}
  </TileWithTitleStyle>
);

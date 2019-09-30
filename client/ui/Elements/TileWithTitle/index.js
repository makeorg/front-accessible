import React from 'react';
import {
  TileWithTitleStyle,
  TileTitleStyle,
  TileSeparatorStyle,
} from './Styled';

type Props = {
  /** Title of the tile */
  title: string,
  /** Chidlren to render */
  children: React.Node,
  /** Optional icon as prop to render */
  icon?: React.Node,
};

export const TileWithTitle = (props: Props) => {
  const { title, children, icon } = props;
  return (
    <TileWithTitleStyle>
      <TileTitleStyle as="h3">
        {icon}
        {title}
      </TileTitleStyle>
      <TileSeparatorStyle />
      {children}
    </TileWithTitleStyle>
  );
};

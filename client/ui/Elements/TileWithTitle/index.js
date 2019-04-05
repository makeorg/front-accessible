import React from 'react';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
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
      <ThirdLevelTitleStyle>{title}</ThirdLevelTitleStyle>
      <TileSeparatorStyle />
      {children}
    </TileWithTitleStyle>
  );
};

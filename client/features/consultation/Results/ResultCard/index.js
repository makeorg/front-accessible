import React from 'react';
// import { i18n } from 'Shared/i18n';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  CardTitleStyle,
  CardDescriptionStyle,
} from 'Client/features/consultation/Cards/style';
import { ResultCardStyle, ResultCardSeparatorStyle } from './style';

type Props = {
  icon?: any,
  title: string,
  description?: string,
  /** Optional id for Tile */
  id?: string,
  /** Chidlren to render */
  children: Node,
};

export const ResultCard = ({
  icon,
  title,
  description,
  id,
  children,
}: Props) => (
  <ResultCardStyle>
    <ColumnElementStyle>
      {icon}
      <CardTitleStyle id={id}>{title}</CardTitleStyle>
      <CardDescriptionStyle className="padding-right">
        {description}
      </CardDescriptionStyle>
    </ColumnElementStyle>
    <ResultCardSeparatorStyle />
    {children}
  </ResultCardStyle>
);

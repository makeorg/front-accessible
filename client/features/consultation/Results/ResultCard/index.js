// @flow
import React from 'react';

import {
  CardTitleStyle,
  CardDescriptionStyle,
} from 'Client/features/consultation/Cards/style';
import { ResultCardStyle, ResultCardIntroWrapperStyle } from './style';

type Props = {
  /** Optional icon to render */
  icon?: any,
  /** Title to render */
  title: string,
  /** Optional description to render */
  description?: string,
  /** Optional id to render */
  id?: string,
  /** Children to render */
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
    <ResultCardIntroWrapperStyle>
      {icon}
      <CardTitleStyle id={id}>{title}</CardTitleStyle>
      {description && (
        <CardDescriptionStyle className="padding-right">
          {description}
        </CardDescriptionStyle>
      )}
    </ResultCardIntroWrapperStyle>
    {children}
  </ResultCardStyle>
);

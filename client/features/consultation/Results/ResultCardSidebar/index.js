import React from 'react';
import {
  ResultCardSidebarStyle,
  ResultCardSidebarTitleStyle,
  ResultCardSidebarParagraphStyle,
} from './style';

type Props = {
  /** Title to render */
  title: string,
  /** Optional description to render */
  description: string,
  /** Children to render */
  children: Node,
};
export const ResultCardSidebar = ({ title, description, children }: Props) => (
  <ResultCardSidebarStyle>
    <ResultCardSidebarTitleStyle>{title}</ResultCardSidebarTitleStyle>
    <ResultCardSidebarParagraphStyle>
      {description}
    </ResultCardSidebarParagraphStyle>
    {children}
  </ResultCardSidebarStyle>
);

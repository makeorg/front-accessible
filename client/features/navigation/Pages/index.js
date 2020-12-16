// @flow
import React from 'react';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { useLocation } from 'react-router';
import { PagesItemStyle, PagesLinkStyle } from './style';

export type PageNavigationType = {
  link: string,
  label: string,
};

type Props = {
  pages: PageNavigationType[],
};

export const InnerPagesNavigation = ({ pages }: Props) => {
  const location = useLocation();
  return (
    <nav>
      <UnstyledListStyle>
        {pages.map(page => (
          <PagesItemStyle key={page.link}>
            <PagesLinkStyle
              to={page.link}
              className={location.pathname === page.link && 'selected'}
            >
              {page.label}
            </PagesLinkStyle>
          </PagesItemStyle>
        ))}
      </UnstyledListStyle>
    </nav>
  );
};

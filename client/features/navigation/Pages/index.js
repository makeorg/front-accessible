// @flow
import React from 'react';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { useLocation } from 'react-router';
import { PagesItemStyle, PagesLinkStyle } from './style';

export type PageNavigationType = {
  link: string,
  label: string,
  routeToMatch: string,
};

type Props = {
  pages: PageNavigationType[],
};

export const InnerPagesNavigation = ({ pages }: Props) => {
  const { pathname } = useLocation();

  return (
    <nav>
      <UnstyledListStyle>
        {pages.map(page => (
          <PagesItemStyle key={page.link}>
            <PagesLinkStyle
              to={page.link}
              className={pathname === page.routeToMatch && 'selected'}
              onClick={page.onClickAction}
            >
              {page.label}
            </PagesLinkStyle>
          </PagesItemStyle>
        ))}
      </UnstyledListStyle>
    </nav>
  );
};

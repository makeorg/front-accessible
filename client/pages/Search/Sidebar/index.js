// @flow
import React from 'react';
import { SearchRegister } from 'Client/features/search/register';
import { SearchPageSidebarStyle } from '../Styled';

export const SearchSidebar = () => {
  return (
    <SearchPageSidebarStyle>
      <SearchRegister />
    </SearchPageSidebarStyle>
  );
};

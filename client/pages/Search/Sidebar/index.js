// @flow
import React from 'react';
import { SearchRegister } from 'Client/features/search/Register';
import { SearchPageSidebarStyle } from '../Styled';

export const SearchSidebar = () => (
  <SearchPageSidebarStyle>
    <SearchRegister />
  </SearchPageSidebarStyle>
);

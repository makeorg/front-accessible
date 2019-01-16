import styled from 'styled-components';
import { MakeFonts } from 'Assets/vars/Fonts';
import { pxToRem } from 'Helpers/styled';
import { Breakpoints, DefaultPadding } from 'Assets/vars/Breakpoints';

export const Nav = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Item = styled.li`
  display: inline-block;
  width: 50%;
  padding: ${pxToRem(DefaultPadding.Mobile)};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    width: auto;
  }
`;

export const ItemLink = styled.a`
  font-family: ${MakeFonts.RobotoRegular};
  text-decoration: none;
  font-size: ${pxToRem('12px')};
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

import styled from 'styled-components';
import { MakeFonts } from 'Assets/vars/Fonts';
import { pxToRem } from 'Helpers/styled';
import { Breakpoints } from 'Assets/vars/Breakpoints';

export const Nav = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Item = styled.li`
  display: inline-block;
  padding: ${pxToRem('15px')};
`;

export const ItemLink = styled.a`
  font-family: ${MakeFonts.RobotoRegular};
  text-decoration: none;
  font-size: ${pxToRem('12px')};
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('14px')};
  }
`;

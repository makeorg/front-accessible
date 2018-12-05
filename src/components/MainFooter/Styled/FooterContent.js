import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import Breakpoints from 'Assets/vars/Breakpoints';

export const Nav = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${props => props.color};
  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('24px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('18px')};
    line-height: ${pxToRem('32px')};
  }
`;

export const Link = styled.a`
  color: ${props => props.color};
  font-size: ${pxToRem('12px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('14px')};
  }
  &:focus {
    outline-color: ${props => props.color};
  }
`;

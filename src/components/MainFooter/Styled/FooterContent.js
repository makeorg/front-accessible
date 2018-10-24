import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { ExtraFonts } from '../../../assets/vars/Fonts';
import { BasicColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const Nav = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${BasicColors.PureWhite};
  font-size: ${pxToRem('14px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('18px')};
  }
`;

export const HighlightedTitle = styled.span`
  font-family: ${ExtraFonts.Ultra};
  font-size: ${pxToRem('18px')};
  text-transform: none;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('25px')};
  }
`;

export const Link = styled.a`
  font-size: ${pxToRem('12px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('14px')};
  }
  &:focus {
    outline-color: ${BasicColors.PureBlack};
  }
`;

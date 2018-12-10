import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { MakeFonts } from 'Assets/vars/Fonts';
import Breakpoints from 'Assets/vars/Breakpoints';

export const IntroTitle = styled.h2`
  font-family: ${MakeFonts.CircularBold};
  font-size: ${pxToRem('26px')};
  line-height: ${pxToRem('30px')};
  color: ${props => props.theme.MainColor};
  text-transform: none;
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('42px')};
    line-height: ${pxToRem('54px')};
  }
`;

export const ClassicTitle = styled.h2``;

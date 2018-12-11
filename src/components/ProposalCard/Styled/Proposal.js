import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { TextColors } from 'Assets/vars/Colors';
import Breakpoints from 'Assets/vars/Breakpoints';
import { MakeFonts } from 'Assets/vars/Fonts';

export const AuthorInfos = styled.cite`
  font-size: ${pxToRem('14px')};
  color: ${TextColors.MediumGrey};
  font-style: normal;
  overflow: hidden;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('18px')};
  }
`;

export const Proposal = styled.blockquote`
  font-size: ${pxToRem('18px')};
  line-height: ${pxToRem('26px')};
  font-family: ${MakeFonts.CircularBold};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('25px')};
    line-height: ${pxToRem('34px')};
  }
`;

import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { TextColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { MakeFonts } from '../../../assets/vars/Fonts';

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

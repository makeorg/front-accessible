import styled from 'styled-components';
import { rem } from 'polished';
import { TextColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { MakeFonts } from '../../../assets/vars/Fonts';

export const AuthorInfos = styled.cite`
  font-size: ${rem('14px')};
  color: ${TextColors.MediumGrey};
  font-style: normal;
  overflow: hidden;
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('18px')};
  }
`;

export const Proposal = styled.blockquote`
  font-size: ${rem('18px')};
  line-height: ${rem('26px')};
  font-family: ${MakeFonts.CircularBold};
  text-align: center;
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('25px')};
    line-height: ${rem('34px')};
  }
`;

import styled from 'styled-components';
import { rem } from 'polished';
import { MakeFonts } from '../../../assets/vars/Fonts';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const IntroTitle = styled.h2`
  font-family: ${MakeFonts.CircularBold};
  font-size: ${rem('26px')};
  line-height: ${rem('30px')};
  color: ${props => props.theme.MainColor};
  text-transform: none;
  text-align: center;
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('42px')};
    line-height: ${rem('54px')};
  }
`;

export const ClassicTitle = styled.h2``;

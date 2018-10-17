import styled from 'styled-components';
import { rem } from 'polished';
import { UnstyledButton, TallRedButton, IconInButton } from '../../Elements/ButtonElements';
import { BackgroundColors, TextColors } from '../../../assets/vars/Colors';
import { MakeFonts } from '../../../assets/vars/Fonts';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const IntroButton = styled(TallRedButton)`
  margin-top: ${rem('15px')};
  min-width: ${rem('125px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    min-width: ${rem('150px')};
    margin-top: ${rem('30px')};
  }
`;

export const BackButton = styled(UnstyledButton)`
  align-items: center;
  font-family: ${MakeFonts.CircularBold};
  font-size: ${rem('14px')};
  color: ${TextColors.MediumGrey};
`;

export const BackIcon = styled(IconInButton)`
  font-size: ${rem('25px')};
  color: ${BackgroundColors.ExtraLightGrey};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('40px')};
  }
`;

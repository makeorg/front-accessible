import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import {
  UnstyledButton,
  TallRedButton,
  IconInButton,
  SmallRedButton
} from 'Components/Elements/ButtonElements';
import { BackgroundColors, BasicColors, TextColors } from 'Assets/vars/Colors';
import { MakeFonts } from 'Assets/vars/Fonts';
import Breakpoints from 'Assets/vars/Breakpoints';

export const IntroButton = styled(TallRedButton)`
  margin-top: ${pxToRem('15px')};
  min-width: ${pxToRem('125px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    min-width: ${pxToRem('150px')};
    margin-top: ${pxToRem('30px')};
  }
`;

export const BackButton = styled(UnstyledButton)`
  align-items: center;
  font-family: ${MakeFonts.CircularBold};
  font-size: ${pxToRem('14px')};
  color: ${TextColors.MediumGrey};
`;

export const BackIcon = styled(IconInButton)`
  font-size: ${pxToRem('25px')};
  color: ${BackgroundColors.ExtraLightGrey};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('40px')};
  }
`;

export const NextButton = styled(SmallRedButton)`
  width: 100%;
  max-width: ${pxToRem('285px')};
`;

export const FinalLink = styled(IntroButton)`
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
  }
`;

import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import {
  UnstyledButton,
  TallRedButton,
  IconInButton,
  SmallRedButton,
  SmallGreyButton
} from 'Components/Elements/ButtonElements';
import { BackgroundColors, BasicColors, TextColors } from 'Assets/vars/Colors';
import { MakeFonts } from 'Assets/vars/Fonts';
import Breakpoints from 'Assets/vars/Breakpoints';

export const BackButtonWrapper = styled.div`
  position: absolute;
  top: ${pxToRem('15px')};
  left: ${pxToRem('15px')};
  display: flex;
  width: calc(100% - ${pxToRem('30px')});
  justify-content: space-between;
  align-items: center;
  min-height: ${pxToRem('58px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    top: ${pxToRem('30px')};
    left: ${pxToRem('30px')};
    width: calc(100% - ${pxToRem('60px')});
    min-height: ${pxToRem('82px')};
  }
`;

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
  font-family: ${MakeFonts.RobotoBold};
  font-weight: bold;
  font-size: ${pxToRem('12px')};
  color: ${TextColors.MediumGrey};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('14px')};
  }
`;

export const BackIcon = styled(IconInButton)`
  font-size: ${pxToRem('25px')};
  color: ${BackgroundColors.ExtraLightGrey};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('40px')};
  }
`;

export const PushProposalButton = styled(SmallRedButton)`
  width: 100%;
  margin: 0 0 ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    width: auto;
    margin: 0 ${pxToRem('10px')};
  }
`;

export const PushProposalNextButton = styled(SmallGreyButton)`
  width: 100%;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    width: auto;
    margin: 0 ${pxToRem('10px')};
  }
`;

export const NextButton = styled(SmallRedButton)`
  width: 100%;
  max-width: ${pxToRem('285px')};
`;

export const AltNextButton = styled(SmallGreyButton)`
  margin-top: ${pxToRem('20px')};
`;

export const FinalLink = styled(IntroButton)`
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
  }
`;

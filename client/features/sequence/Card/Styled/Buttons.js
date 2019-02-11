import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import {
  UnstyledButtonStyle,
  TallRedButtonStyle,
  IconInButtonStyle,
  RedButtonStyle,
  GreyButtonStyle
} from 'Client/ui/Elements/ButtonElements';
import { BackgroundColors, BasicColors, TextColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const BackButtonWrapper = styled.div`
  position: absolute;
  top: ${pxToRem('15px')};
  left: ${pxToRem('15px')};
  display: flex;
  width: calc(100% - ${pxToRem('30px')});
  justify-content: space-between;
  align-items: center;
  min-height: ${pxToRem('58px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    top: ${pxToRem('30px')};
    left: ${pxToRem('30px')};
    width: calc(100% - ${pxToRem('60px')});
    min-height: ${pxToRem('82px')};
  }
`;

export const IntroButton = styled(TallRedButtonStyle)`
  margin-top: ${pxToRem('15px')};
  min-width: ${pxToRem('125px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-width: ${pxToRem('150px')};
    margin-top: ${pxToRem('30px')};
  }
`;

export const BackButton = styled(UnstyledButtonStyle)`
  align-items: center;
  font-family: ${MakeFonts.RobotoBold};
  font-size: ${pxToRem('12px')};
  color: ${TextColors.MediumGrey};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('14px')};
  }
`;

export const BackIcon = styled(IconInButtonStyle)`
  font-size: ${pxToRem('25px')};
  color: ${BackgroundColors.ExtraLightGrey};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('40px')};
  }
`;

export const PushProposalButton = styled(RedButtonStyle)`
  width: 100%;
  margin: 0 0 ${pxToRem('10px')};
  white-space: normal;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    width: auto;
    margin: 0 ${pxToRem('10px')};
  }
`;

export const PushProposalNextButton = styled(GreyButtonStyle)`
  width: 100%;
  white-space: normal;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    width: auto;
    margin: 0 ${pxToRem('10px')};
  }
`;

export const NextButton = styled(RedButtonStyle)`
  width: 100%;
  max-width: ${pxToRem('285px')};
  white-space: normal;
`;

export const AltNextButton = styled(GreyButtonStyle)`
  margin-top: ${pxToRem('20px')};
  white-space: normal;
`;

export const FinalLink = styled(IntroButton)`
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
  }
`;

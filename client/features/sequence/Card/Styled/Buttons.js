import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import {
  UnstyledButtonStyle,
  TallRedButtonStyle,
  IconWrapperStyle,
  RedButtonStyle,
  GreyButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import {
  BackgroundColors,
  BasicColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const BackButtonWrapperStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    top: ${pxToRem('30px')};
    left: ${pxToRem('30px')};
  }
`;

export const IntroButtonStyle = styled(TallRedButtonStyle)`
  margin-top: ${pxToRem('15px')};
  min-width: ${pxToRem('125px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    min-width: ${pxToRem('150px')};
    margin-top: ${pxToRem('30px')};
  }
`;

export const BackButtonStyle = styled(UnstyledButtonStyle)`
  align-items: center;
  font-family: ${MakeFonts.RobotoBold};
  font-size: ${pxToRem('12px')};
  color: ${TextColors.MediumGrey};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('14px')};
  }
`;

export const BackIconStyle = styled(IconWrapperStyle)`
  font-size: ${pxToRem('15px')};
  color: ${BackgroundColors.ExtraLightGrey};
  svg {
    fill: ${BackgroundColors.ExtraLightGrey};
  }
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('30px')};
  }
`;

export const PushProposalButtonStyle = styled(RedButtonStyle)`
  width: 100%;
  margin: 0 0 ${pxToRem('10px')};
  white-space: normal;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    width: auto;
    margin: 0 ${pxToRem('10px')};
  }
`;

export const PushProposalNextButtonStyle = styled(GreyButtonStyle)`
  width: 100%;
  white-space: normal;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    width: auto;
    margin: 0 ${pxToRem('10px')};
  }
`;

export const NextButtonStyle = styled(RedButtonStyle)`
  width: 100%;
  max-width: ${pxToRem('285px')};
  white-space: normal;
`;

export const AltNextButtonStyle = styled(GreyButtonStyle)`
  margin-top: ${pxToRem('20px')};
  white-space: normal;
`;

export const FinalLinkStyle = styled(IntroButtonStyle)`
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
  }
`;

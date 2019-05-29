import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import {
  SmallRedButtonStyle,
  SmallGreyButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const IntroButtonStyle = styled(SmallRedButtonStyle)`
  margin-top: ${pxToRem('15px')};
  min-width: ${pxToRem('125px')};
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    min-width: ${pxToRem('150px')};
    margin-top: ${pxToRem('30px')};
  }
`;

export const PushProposalButtonStyle = styled(SmallRedButtonStyle)`
  width: 100%;
  margin: 0 0 ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    width: auto;
    margin: 0 ${pxToRem('10px')};
  }
`;

export const PushProposalNextButtonStyle = styled(SmallGreyButtonStyle)`
  width: 100%;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    width: auto;
    margin: 0 ${pxToRem('10px')};
  }
`;

export const NextButtonStyle = styled(SmallRedButtonStyle)`
  width: 100%;
  max-width: ${pxToRem('285px')};
`;

export const AltNextButtonStyle = styled(SmallGreyButtonStyle)`
  margin-top: ${pxToRem('20px')};
`;

export const FinalLinkStyle = styled(IntroButtonStyle)`
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
  }
`;

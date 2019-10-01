/* @flow */

import styled, { keyframes } from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';

export const SpinnerContainerStyle = styled(MiddleColumnStyle)`
  width: 100%;
  height: 100%;
`;

export const SpinnerWrapperStyle = styled.div`
  display: block;
  position: relative;
  width: ${pxToRem('64px')};
  height: ${pxToRem('64px')};
  overflow: hidden;
`;

const Spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerFirstRingStyle = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${pxToRem('51px')};
  height: ${pxToRem('51px')};
  margin: ${pxToRem('6px')};
  border: ${pxToRem('6px')} solid ${BackgroundColors.MediumGrey};
  border-radius: 50%;
  animation: ${Spinning} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${BackgroundColors.MediumGrey} transparent transparent
    transparent;
`;

export const SpinnerSecondRingStyle = styled(SpinnerFirstRingStyle)`
  animation-delay: -0.45s;
`;

export const SpinnerThirdRingStyle = styled(SpinnerFirstRingStyle)`
  animation-delay: -0.3s;
`;

export const SpinnerFourthRingStyle = styled(SpinnerFirstRingStyle)`
  animation-delay: -0.15s;
`;

/* @flow */

import styled, { keyframes } from 'styled-components';
import { pxToRem } from 'Src/helpers/styled';
import { BackgroundColors } from 'Src/assets/vars/Colors';

export const Wrapper = styled.div`
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

export const FirstRing = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${pxToRem('51px')};
  height: ${pxToRem('51px')};
  margin: ${pxToRem('6px')};
  border: ${pxToRem('6px')} solid ${BackgroundColors.Grey};
  border-radius: 50%;
  animation: ${Spinning} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${BackgroundColors.Grey} transparent transparent transparent;
`;

export const SecondRing = styled(FirstRing)`
  animation-delay: -0.45s;
`;

export const ThirdRing = styled(FirstRing)`
  animation-delay: -0.3s;
`;

export const FourthRing = styled(FirstRing)`
  animation-delay: -0.15s;
`;

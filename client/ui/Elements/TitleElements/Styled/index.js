/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const SecondLevelTitleStyle = styled.h2`
  font-size: ${pxToRem('16px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('22px')};
  }
`;

export const ThirdLevelTitleStyle = styled.h3`
  font-size: ${pxToRem('14px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('18px')};
  }
`;

export const FourthLevelTitleStyle = styled.h4`
  font-size: ${pxToRem('12px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('16px')};
  }
`;

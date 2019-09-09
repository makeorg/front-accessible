/* @flow */

import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ThirdLevelTitleCircularStyle = styled.h3`
  font-size: 22px;
  line-height: 30px;
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
`;

export const SecondLevelTitleStyle = styled.h2`
  font-size: 20px;
  line-height: 24px;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 24px;
    line-height: 32px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 26px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 28px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 30px;
  }
`;

export const ThirdLevelTitleStyle = styled.h3`
  font-size: 14px;
  line-height: 19px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
    line-height: 22px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    line-height: 25px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 22px;
  }
`;

export const FourthLevelTitleStyle = styled.h4`
  font-size: 12px;
  line-height: 15px;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 19px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 32px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Src/helpers/styled';
import { BackgroundColors, BasicColors, BorderColors } from 'Src/assets/vars/Colors';
import { Breakpoints, Layouts, DefaultPadding } from 'Src/assets/vars/Breakpoints';
import { CALC_HEIGHT_MOBILE, CALC_HEIGHT_DESKTOP } from 'Src/constants/elements';
import { SpaceBetweenColumn, CenterColumn } from './FlexElements';

export const AppWrapper = styled(SpaceBetweenColumn)`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: ${BackgroundColors.LightGrey};
  background-color: ${BackgroundColors.LightGrey};
`;

export const MainContent = styled.main`
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

export const PageWrapper = styled(CenterColumn)`
  min-height: calc(100vh - ${pxToRem(CALC_HEIGHT_MOBILE)});
  width: 100%;
  height: 100%;
  padding: ${pxToRem(DefaultPadding.Mobile)};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem(DefaultPadding.Desktop)};  
    min-height: calc(100vh - ${pxToRem(CALC_HEIGHT_DESKTOP)});
  }
`;

export const MiddlePageWrapper = styled(PageWrapper)`
  justify-content: center;
`;

export const PageContainer = styled(CenterColumn)`
  width: 100%;
  height: 100%;
  max-width: ${pxToRem(Layouts.ContainerWidth)};
  background-color: ${BasicColors.PureWhite};
  border: ${pxToRem('1px')} solid ${BorderColors.LightGrey};
  padding: ${pxToRem(DefaultPadding.Mobile)};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem(DefaultPadding.Desktop)};  
  }
`;

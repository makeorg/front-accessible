/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BackgroundColors, BasicColors, BorderColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints, Layouts, DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { CALC_HEIGHT_MOBILE, CALC_HEIGHT_DESKTOP } from 'Client/app/constants/elements';
import { SpaceBetweenColumnStyle, CenterColumnStyle } from 'Client/ui/Elements/FlexElements';

export const AppWrapper = styled(SpaceBetweenColumnStyle)`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: ${BackgroundColors.LightGrey};
`;

export const MainContent = styled.main`
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

export const PageWrapper = styled(CenterColumnStyle)`
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

export const PageContainer = styled(CenterColumnStyle)`
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

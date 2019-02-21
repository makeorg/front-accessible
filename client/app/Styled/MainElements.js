/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BackgroundColors, BasicColors, BorderColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints, Layouts, DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { ColumnElementStyle, CenterColumnStyle } from 'Client/ui/Elements/FlexElements';

export const AppWrapperStyle = styled(ColumnElementStyle)`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: ${BackgroundColors.LightGrey};
`;

export const AppMainContentStyle = styled.main`
  position: relative;
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  z-index: 0;
  overflow: hidden;
`;

export const PageWrapperStyle = styled(CenterColumnStyle)`
  width: 100%;
  flex-grow: 1;
  padding: ${pxToRem(DefaultPadding.Mobile)};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem(DefaultPadding.Desktop)};  
  }
`;

export const MiddlePageWrapperStyle = styled(PageWrapperStyle)`
  justify-content: center;
`;

export const PageContainerStyle = styled(CenterColumnStyle)`
  width: 100%;
  flex-grow: 1;
  max-width: ${pxToRem(Layouts.ContainerWidth)};
  background-color: ${BasicColors.PureWhite};
  border: ${pxToRem('1px')} solid ${BorderColors.LightGrey};
  padding: ${pxToRem(DefaultPadding.Mobile)};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem(DefaultPadding.Desktop)};  
  }
`;

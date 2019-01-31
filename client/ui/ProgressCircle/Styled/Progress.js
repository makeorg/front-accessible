import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, TextColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ProgressWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem('58px')};
  height: ${pxToRem('58px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    width: ${pxToRem('82px')};
    height: ${pxToRem('82px')};
  }
`;

export const ProgressSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export const ProgressBackground = styled.circle`
  fill: ${BasicColors.PureWhite};
`;

export const ProgressRing = styled.circle`
  fill: transparent;
  stroke: ${BackgroundColors.ExtraLightGrey};
  stroke-width: ${pxToRem('3px')};
`;

export const ProgressCircleStyle = styled.circle`
  fill: transparent;
  stroke: ${props => props.theme.color};
  stroke-width: ${pxToRem('3px')};
  stroke-dasharray: ${props => props.progress || 0} ${props => props.remain || 0};
  stroke-dashoffset: 25;
`;

export const ProgressCounter = styled.h2`
  position: relative;
  z-index: 1;
  font-size: ${pxToRem('12px')};
  color: ${TextColors.MediumGrey};
  font-family: ${MakeFonts.RobotoRegular};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('14px')};
  }
`;

export const ActiveCard = styled.span`
  font-size: ${pxToRem('12px')};
  color: ${BasicColors.PureBlack};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('18px')};
  }
`;

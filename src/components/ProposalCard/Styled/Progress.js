import styled from 'styled-components';
import { rem } from 'polished';
import { BasicColors, TextColors, BackgroundColors } from '../../../assets/vars/Colors';
import { MakeFonts } from '../../../assets/vars/Fonts';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const ProgressWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${rem('72px')};
  height: ${rem('72px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    width: ${rem('92px')};
    height: ${rem('92px')};
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
  stroke-width: ${rem('3px')};
`;

export const ProgressBar = styled.circle.attrs({
  progress: props => props.progress || 0,
  remain: props => props.remain || 0
})`
  fill: transparent;
  stroke: ${props => props.theme.MainColor};
  stroke-width: ${rem('3px')};
  stroke-dasharray: ${props => props.progress} ${props => props.remain};
  stroke-dashoffset: 25;
`;

export const ProgressCounter = styled.h2`
  position: relative;
  z-index: 1;
  font-size: ${rem('14px')};
  color: ${TextColors.MediumGrey};
  font-family: ${MakeFonts.CircularBook};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('18px')};
  }
`;

export const ActiveCard = styled.span`
  font-size: ${rem('18px')};
  color: ${BasicColors.PureBlack};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('24px')};
  }
`;

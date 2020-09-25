import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { intToPx } from 'Shared/helpers/styled';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const ProgressWrapperStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 82px;
    height: 82px;
  }
`;

export const ProgressSvgStyle = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export const ProgressBackgroundStyle = styled.circle`
  fill: ${color.white};
`;

export const ProgressRingStyle = styled.circle`
  fill: transparent;
  stroke: ${color.greyLighter};
  stroke-width: 3px;
`;

export const ProgressCircleStyle = styled.circle`
  fill: transparent;
  stroke: ${props => props.theme.color};
  stroke-width: 3px;
  stroke-dasharray: ${props => props.progress || 0}
    ${props => props.remain || 0};
  stroke-dashoffset: 25;
`;

export const ProgressCounterStyle = styled(ParagraphStyle)`
  position: relative;
  align-self: center;
  z-index: 1;
  font-family: ${MakeFonts.CircularStandardBook};
`;

export const ProgressActiveCardStyle = styled.span`
  font-size: 12px;
  color: ${color.black};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
  }
`;

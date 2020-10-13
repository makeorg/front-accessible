import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { intToPx } from 'Shared/helpers/styled';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { SvgInfos } from 'Client/ui/Svg/elements';
import { UnstyledButtonStyle } from '../Buttons/style';

export const TagsTooltipContainerStyle = styled.div`
  order: 1;
`;

export const TagsTooltipWrapperStyle = styled.div`
  position: relative;
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: uppercase;
  background-color: ${color.infos};
  color: ${color.white};
  padding: 15px 20px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  margin: 0 0 20px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
    line-height: normal;
    letter-spacing: normal;
  }
`;

export const TooltipSvgInfos = styled(SvgInfos)`
  width: 14px;
  height: 14px;
  margin: 5px 9px 0px 0px;
`;

export const TagsTooltipCrossStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: 5px;
  right: 10px;
  svg {
    fill: ${color.white};
    width: 10px;
  }
`;

export const TriangleStyle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent ${color.infos} transparent;
  margin-left: 73%;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-left: 440px;
  }
`;

export const LinkStyle = styled(UnstyledButtonStyle)`
  display: inline;
  color: ${color.white};
  text-decoration: underline;
  margin-left: 5px;
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: uppercase;
  &:hover,
  &:focus {
    color: ${color.white};
  }
`;

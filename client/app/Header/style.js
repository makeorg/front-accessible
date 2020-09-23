import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { Layouts, Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  FlexElementStyle,
  SpaceBetweenRowStyle,
} from 'Client/ui/Elements/FlexElements';
import { SvgLogo } from 'Client/ui/Svg/elements';

export const HeaderStyle = styled.header`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  padding: 11px 20px;
  background-color: ${BasicColors.PureWhite};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 25px 20px;
  }
`;

export const HeaderInnerStyle = styled(SpaceBetweenRowStyle)`
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
`;

export const HeaderFlexLeftStyle = styled(FlexElementStyle)`
  flex-shrink: 0;
  justify-items: flex-start;
  align-items: center;
`;

export const HeaderFlexRightStyle = styled(FlexElementStyle)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderLogoLinkStyle = styled(Link)`
  display: flex;
`;

export const HeaderLogoStyle = styled(SvgLogo)`
  width: 66px;
  height: 33px;
`;

export const HeaderSeparatorStyle = styled.div`
  width: 1px;
  height: 100%;
  margin: 0 30px;
  background-color: ${ShadowColors.BlackZeroOneOpacity};
`;

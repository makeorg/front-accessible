import styled from 'styled-components';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';
import { ShadowColors, BasicColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from '../assets/vars/Breakpoints';

export const PanelWrapperStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  &[aria-hidden='true'] {
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;

export const PanelOverlayStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  background-color: ${ShadowColors.BlackZeroEightOpacity};
  display: none;
  visibility: hidden;
  &.expanded {
    display: block;
    visibility: visible;
  }
`;

export const PanelInnerStyle = styled(MiddleColumnStyle)`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: calc(100% - 65px);
  z-index: 15;
  background-color: ${BasicColors.PureWhite};
  transition: 0.5s ease-in bottom;
  &.expanded {
    bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    height: calc(100% - 100px);
  }
`;

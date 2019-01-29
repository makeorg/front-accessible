import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Src/assets/vars/Colors';
import { Breakpoints, DefaultPadding } from 'Src/assets/vars/Breakpoints';

export const ProposalCardCentered = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${pxToRem(DefaultPadding.Mobile)};
  z-index: ${props => props.zindex || 0};
  transform: scaleX(${props => props.scale || 0}) translateY(-${props => props.position || 0}px);
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  transition: transform 0.75s ease-in;
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreOpacity};
  overflow: hidden;
  ${props => (props.isCardCollapsed ? 'transform: translateY(125%)' : '')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

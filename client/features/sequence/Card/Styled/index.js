import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ProposalCardStyle = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: ${pxToRem('345px')};
  padding: ${pxToRem(DefaultPadding.Mobile)};
  z-index: ${props => props.zindex || 0};
  transform: scaleX(${props => props.scale || 0})
    translateY(-${props => props.position || 0}px);
  background-color: ${BasicColors.PureWhite};
  transition: transform 0.75s ease-in;
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreOpacity};
  overflow: hidden;
  ${props => (props.isCardCollapsed ? 'transform: translateY(125%)' : '')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    min-height: ${pxToRem('445px')};
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

export const ProposalCardCenteredStyle = styled(ProposalCardStyle)`
  justify-content: center;
`;

export const ProposalStyle = styled.blockquote`
  max-width: 100%;
  font-size: ${pxToRem('22px')};
  line-height: ${pxToRem('30px')};
  font-family: ${MakeFonts.RobotoBold};
  text-align: center;
`;

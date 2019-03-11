import styled from 'styled-components';
import { IntToPx } from 'Shared/helpers/styled';
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
  min-height: 345px;
  padding: ${IntToPx(DefaultPadding.Mobile)};
  z-index: ${props => props.zindex || 0};
  transform: scaleX(${props => props.scale || 0})
    translateY(-${props => props.position || 0}px);
  background-color: ${BasicColors.PureWhite};
  transition: transform 0.75s ease-in;
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreOpacity};
  overflow: hidden;
  ${props => (props.isCardCollapsed ? 'transform: translateY(125%)' : '')};
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    min-height: 445px;
    padding: ${IntToPx(DefaultPadding.Desktop)};
  }
`;

export const ProposalCardCenteredStyle = styled(ProposalCardStyle)`
  justify-content: center;
`;

export const ProposalStyle = styled.blockquote`
  max-width: 100%;
  font-size: 12px;
  line-height: 16px;
  font-family: ${MakeFonts.RobotoBold};
  text-align: center;
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    font-size: 22px;
    line-height: 30px;
  }
`;

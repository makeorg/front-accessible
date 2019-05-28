import styled, { keyframes } from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

const EnableVisibility = keyframes`
  0% { visibility: hidden; }
  100% { visibility: visible; }
`;

const DisableVisibility = keyframes`
  0% { visibility: visible; }
  100% { visibility: hidden; }
`;

export const ProposalCardStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 345px;
  padding: ${intToPx(DefaultPadding.Mobile)};
  z-index: ${props => props.zindex || 0};
  transform: scaleX(${props => props.scale || 0})
    translateY(-${props => props.position || 0}px);
  background-color: ${BasicColors.PureWhite};
  transition: all 0.75s ease-in;
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreeOpacity};
  ${props => (props.isCardCollapsed ? 'transform: translateY(125%);' : '')};
  button,
  a,
  form {
    animation: ${props =>
        props.isCardVisible ? EnableVisibility : DisableVisibility}
      0.75s 1 both;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const PlaceholderCardStyle = styled(ProposalCardStyle)`
  position: relative;
`;

export const ProposalCardCenteredStyle = styled(ProposalCardStyle)`
  justify-content: center;
`;

export const SequenceProposalStyle = styled.blockquote`
  max-width: 100%;
  font-size: 12px;
  line-height: normal;
  font-family: ${MakeFonts.RobotoBold};
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 22px;
  }
`;

import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { BasicColors, ShadowColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const IntroProposalCard = styled.li.attrs({
  position: props => props.position || 0,
  zindex: props => props.zindex || 0,
  scale: props => props.scale || 0
})`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${pxToRem('15px')};
  z-index: ${props => props.zindex};
  transform: scaleX(${props => props.scale}) translateY(-${props => props.position}px);
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreeOpacity};
  transition: transform 0.75s ease-in;
  overflow: hidden;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    padding: ${pxToRem('30px')};
  }
`;

export const FakeNavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin-bottom: ${pxToRem('30px')};
  }
`;

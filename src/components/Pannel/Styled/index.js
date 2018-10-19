import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { BasicColors, ShadowColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { ButtonWrapper, CloseButton } from './Button';

const Pannel = styled.div`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: calc( 100% - ${pxToRem('20px')});
  max-width: ${pxToRem(Breakpoints.sequenceWidth)};
  padding: ${pxToRem('20px')};
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreOpacity};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  transform: translate(-50%, -${props => props.translate}%);
  transition: transform 0.5s linear;
  overflow: auto;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    height: calc( 100% - ${pxToRem('40px')});
  }
`;

/* Button */
Pannel.ButtonWrapper = ButtonWrapper;
Pannel.CloseButton = CloseButton;

export default Pannel;

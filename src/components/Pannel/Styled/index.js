import styled from 'styled-components';
import { rem } from 'polished';
import { BasicColors, ShadowColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';
import CloseButton from './Button';

const Pannel = styled.section`
  position: absolute;;
  top: 100%;
  left: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc( 100% - ${rem('20px')});
  max-width: ${rem(Breakpoints.sequenceWidth)};
  padding: ${rem('20px')};
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreOpacity};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  transform: translate(-50%, -${props => props.translate}%);
  transition: transform 0.5s linear;
  @media (min-width: ${rem(Breakpoints.mobile)}){
    height: calc( 100% - ${rem('40px')});
  }
`;

/* Button */
Pannel.CloseButton = CloseButton;

export default Pannel;

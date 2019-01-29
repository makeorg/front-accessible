import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Src/assets/vars/Colors';
import { Breakpoints, Layouts } from 'Src/assets/vars/Breakpoints';
import CloseButton from './Button';

const Pannel = styled.div`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  width: 100%;
  max-width: ${pxToRem(Layouts.ContainerWidth)};
  height: calc( 100% - ${pxToRem('15px')});
  padding: ${pxToRem('50px')} ${pxToRem('20px')}  ${pxToRem('67px')}};
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreOpacity};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  transform: translate(-50%, -${props => props.translate}%);
  transition: transform 0.5s linear;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc( 100% - ${pxToRem('25px')});
    padding: ${pxToRem('50px')} ${pxToRem('20px')} ${pxToRem('78px')}};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  overflow: auto;
`;

/* Pannel */
Pannel.Content = Content;

/* Button */
Pannel.CloseButton = CloseButton;

export default Pannel;

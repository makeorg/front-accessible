import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { UnstyledButton, SmallRedButton } from '../../Elements/ButtonElements';
import { BackgroundColors, BasicColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const BackArrow = styled(UnstyledButton)`
  position: absolute;
  background: ${BackgroundColors.ExtraLightGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${BasicColors.PureWhite};
  padding: ${pxToRem('15px')};
  top: ${pxToRem('-75px')};
  left: 50%;
  z-index: 0;
  transform: translate(-50%, 0);
  font-size: ${pxToRem('40px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    top: ${pxToRem('-85px')};
    font-size: ${pxToRem('51px')};
    padding: ${pxToRem('30px')};
  }
`;

export const BackButton = styled(SmallRedButton)`
  position: absolute;
  top: ${pxToRem('-17.5px')};
  left: 50%;
  z-index: 1;
  transform: translate(-50%, 0);
`;

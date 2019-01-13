import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { UnstyledButton, SmallRedButton } from 'Components/Elements/ButtonElements';
import { BackgroundColors, BasicColors } from 'Assets/vars/Colors';
import { Breakpoints } from 'Assets/vars/Breakpoints';

export const BackArrow = styled(UnstyledButton)`
  position: absolute;
  background: ${BackgroundColors.ExtraLightGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${BasicColors.PureWhite};
  padding: ${pxToRem('20px')};
  top: ${pxToRem('-65px')};
  left: 50%;
  z-index: 0;
  transform: translate(-50%, 0);
  font-size: ${pxToRem('45px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    top: ${pxToRem('-85px')};
    font-size: ${pxToRem('50px')};
    padding: ${pxToRem('30px')};
  }
`;

export const BackButton = styled(SmallRedButton)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, 0);
  min-width: ${pxToRem('210px')};
`;

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import {
  UnstyledButtonStyle,
  RedButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { BackgroundColors, BasicColors } from 'Client/app/assets/vars/Colors';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';

export const BackArrow = styled(UnstyledButtonStyle)`
  position: absolute;
  background-color: ${BackgroundColors.ExtraLightGrey};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${BasicColors.PureWhite};
  padding: ${pxToRem('15px')};
  top: ${pxToRem('-50px')};
  left: 50%;
  z-index: 0;
  transform: translate(-50%, 0);
  font-size: ${pxToRem('35px')};
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    top: ${pxToRem('-85px')};
    font-size: ${pxToRem('50px')};
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

export const BackButton = styled(RedButtonStyle)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, 0);
  min-width: ${pxToRem('210px')};
`;

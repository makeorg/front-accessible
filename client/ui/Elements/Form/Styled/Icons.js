import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { TextColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const InputIconStyle = styled.label`
  width: 30px;
  display: flex;
  color: ${MakeThemeColors.Red};
  font-size: 16px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 18px;
  }
`;

export const CenterInputIconStyle = styled(InputIconStyle)`
  align-items: center;
`;

export const TextAreaIconStyle = styled(InputIconStyle)`
  margin-top: 10px;
`;

export const HidePasswordIconStyle = styled(UnstyledButtonStyle)`
  color: ${TextColors.MediumGrey};
`;

export const CheckboxIconStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  bottom: 5%;
  left: 25%;
  z-index: 1;
  font-size: 14px;
  color: ${MakeThemeColors.Red};
`;

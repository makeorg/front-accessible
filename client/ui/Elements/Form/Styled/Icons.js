import styled from 'styled-components';
import { TextColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const InputIconStyle = styled.span`
  display: flex;
  color: ${MakeThemeColors.Red};
  font-size: 18px;
  margin-right: 5px;
  svg {
    fill: ${MakeThemeColors.Red};
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

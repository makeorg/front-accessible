import styled from 'styled-components';
import { MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';

export const ModificationWrapperStyle = styled(FlexElementStyle)`
  justify-content: space-between;
`;

export const ModificationIconStyle = {
  fill: MakeThemeColors.Red,
  marginRight: '5px',
};

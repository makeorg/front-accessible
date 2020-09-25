import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';

export const InputIconStyle = styled.span`
  display: flex;
  color: ${color.brandSecondary};
  font-size: 18px;
  margin-right: 5px;
  svg {
    fill: ${color.brandSecondary};
  }
`;

export const CenterInputIconStyle = styled(InputIconStyle)`
  align-items: center;
`;

export const TextAreaIconStyle = styled(InputIconStyle)`
  margin-top: 10px;
`;

export const HidePasswordIconStyle = styled(UnstyledButtonStyle)`
  color: ${color.greyDark};
`;

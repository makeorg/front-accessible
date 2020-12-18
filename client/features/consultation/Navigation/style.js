import { color } from 'athena-design-tokens/dist/color';
import { ContainerWithPadding } from 'Client/app/Styled/MainElements';
import styled from 'styled-components';

export const NavigationWrapperStyle = styled.div`
  background-color: ${color.white};
`;

export const NavigationInnerStyle = styled.div`
  ${ContainerWithPadding};
`;

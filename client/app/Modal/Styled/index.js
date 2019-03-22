import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const ModalCloseButtonStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: ${pxToRem('20px')};
  right: ${pxToRem('20px')};
  z-index: 1;
  font-size: ${pxToRem('24px')};
`;

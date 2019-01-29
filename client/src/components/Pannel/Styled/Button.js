import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { UnstyledButton } from 'Src/components/Elements/ButtonElements';

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: ${pxToRem('20px')};
  right: ${pxToRem('20px')};
  z-index: 1;
  font-size: ${pxToRem('24px')};
`;

export default CloseButton;

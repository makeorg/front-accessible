import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { UnstyledButton } from 'Components/Elements/ButtonElements';

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: ${pxToRem('20px')};
  right: ${pxToRem('20px')};
  z-index: 1;
  font-size: ${pxToRem('24px')};
`;

export default CloseButton;

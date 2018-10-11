import styled from 'styled-components';
import { rem } from 'polished';
import { UnstyledButton } from '../../Styled/ButtonElements';

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  z-index: 1;
  top: ${rem('20px')};
  right: ${rem('20px')};
  font-size: ${rem('24px')};
`;

export default CloseButton;

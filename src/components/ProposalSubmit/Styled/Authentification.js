import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';

const ProposalSubmitAuthentificationWrapper = styled.div`
  max-width: ${pxToRem('620px')};
  min-height: ${pxToRem('415px')};
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export default ProposalSubmitAuthentificationWrapper;

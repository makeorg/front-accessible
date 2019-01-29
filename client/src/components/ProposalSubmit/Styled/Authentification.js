import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';

const ProposalSubmitAuthentificationWrapper = styled.div`
  max-width: ${pxToRem('620px')};
  min-height: ${pxToRem('340px')};
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: ${pxToRem('20px')} auto 0;
`;

export default ProposalSubmitAuthentificationWrapper;

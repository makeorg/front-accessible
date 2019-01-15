import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { Breakpoints } from 'Assets/vars/Breakpoints';

export const ProposalPageContent = styled.div`
  width: 100%;
  height: 100%;
  padding: ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem('30px')};
  }
`;

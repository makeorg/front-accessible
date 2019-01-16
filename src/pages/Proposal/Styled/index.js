import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { Breakpoints, DefaultPadding } from 'Assets/vars/Breakpoints';

export const ProposalPageContent = styled.div`
  width: 100%;
  height: 100%;
  padding: ${pxToRem(DefaultPadding.Mobile)};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

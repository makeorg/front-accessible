import styled from 'styled-components';
import { pxToRem } from 'Src/helpers/styled';
import { Breakpoints, DefaultPadding } from 'Src/assets/vars/Breakpoints';

export const ProposalPageContent = styled.div`
  width: 100%;
  height: 100%;
  padding: ${pxToRem(DefaultPadding.Mobile)};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

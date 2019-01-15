import styled from 'styled-components';
import { Breakpoints } from 'Assets/vars/Breakpoints';
import { pxToRem } from 'Helpers/styled';
import { InnerContent } from 'Components/Elements/MainElements';

export const SequencePageContent = styled.div`
  width: 100%;
  height: calc(100% - ${pxToRem('91px')});
  overflow: auto;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc(100% - ${pxToRem('78px')});
  }
`;

export const SequencePageInnerContent = styled(InnerContent)`
  position: relative;
  z-index: 0;
  min-height: ${pxToRem('545px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-height: ${pxToRem('660px')};
  }
`;

import styled from 'styled-components';
import { Breakpoints } from 'Assets/vars/Breakpoints';
import { pxToRem } from 'Helpers/styled';
import { MiddleColumn } from 'Components/Elements/FlexElements';

export const SequencePageContent = styled.div`
  width: 100%;
  height: calc(100vh - ${pxToRem('158px')});
  overflow: auto;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc(100vh - ${pxToRem('153px')});
  }
`;

export const SequencePageInnerContent = styled(MiddleColumn)`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  min-height: ${pxToRem('545px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-height: ${pxToRem('660px')};
  }
`;

import styled from 'styled-components';
import { Breakpoints } from 'Src/assets/vars/Breakpoints';
import { pxToRem } from 'Src/helpers/styled';
import { CALC_SEQUENCE_HEIGHT_MOBILE, CALC_SEQUENCE_HEIGHT_DESKTOP } from 'Src/constants/elements';
import { MiddleColumn } from 'Src/components/Elements/FlexElements';

export const SequencePageContent = styled.div`
  width: 100%;
  height: calc(${props => props.height || '100vh'} - ${pxToRem(CALC_SEQUENCE_HEIGHT_MOBILE)});
  overflow: auto;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc(${props => props.height || '100vh'} - ${pxToRem(CALC_SEQUENCE_HEIGHT_DESKTOP)});
  }
`;

export const SequencePageInnerContent = styled(MiddleColumn)`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  min-height: ${pxToRem('545px')};
  ${props => (props.isSequenceCollapsed ? 'overflow: hidden' : '')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-height: ${pxToRem('660px')};
  }
`;

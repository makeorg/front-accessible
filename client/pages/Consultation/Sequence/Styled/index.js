import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';

export const SequencePageContentStyle = styled(MiddleColumnStyle)`
  width: 100%;
  display: flex;
  flex-grow: 1;
  overflow: auto;
  min-height: ${pxToRem('450px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    min-height: ${pxToRem('550px')};
  }
`;

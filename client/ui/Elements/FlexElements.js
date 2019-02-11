/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const FlexElementStyle = styled.div`
  display: flex;
`;

export const ColumnToRowElementStyle = styled(FlexElementStyle)`
  flex-flow: column;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    flex-flow: row;
  }
`;

export const ColumnElementStyle = styled(FlexElementStyle)`
  flex-flow: column;
`;

/* Row Elements */
export const CenterRowStyle = styled(FlexElementStyle)`
  justify-content: center;
`;

export const MiddleRowStyle = styled(CenterRowStyle)`
  align-items: center;
`;

export const SpaceBetweenRowStyle = styled(FlexElementStyle)`
  justify-content: space-between;
`;

/* Column Elements */
export const CenterColumnStyle = styled(ColumnElementStyle)`
  align-items: center;
`;

export const MiddleColumnStyle = styled(CenterColumnStyle)`
  justify-content: center;
`;

export const SpaceBetweenColumnStyle = styled(ColumnElementStyle)`
  justify-content: space-between;
`;

/* Column To Row Elements */
export const CenterColumnStyleToRowStyle = styled(ColumnToRowElementStyle)`
  align-items: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    justify-content: center;
  }
`;

export const MiddleColumnToRowStyle = styled(CenterColumnStyleToRowStyle)`
  justify-content: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    align-items: center;
  }
`;

export const SpaceBetweenColumnToRowStyle = styled(ColumnToRowElementStyle)`
  align-items: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    justify-content: space-between;
  }
`;
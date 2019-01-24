import styled from 'styled-components';
import { pxToRem } from 'Src/helpers/styled';
import { TextColors } from 'Src/assets/vars/Colors';
import { Breakpoints } from 'Src/assets/vars/Breakpoints';
import { MiddleColumnToRow } from 'Src/components/Elements/FlexElements';


export const Wrapper = styled(MiddleColumnToRow)`
  width: 100%;
  margin: ${pxToRem('15px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin: ${pxToRem('15px')} 0;
  }
`;

export const Title = styled.h2`
  font-size: ${pxToRem('13px')};
  color: ${TextColors.MediumGrey};
  margin: 0 0 ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('18px')};
    margin: 0 ${pxToRem('20px')};
  }
`;

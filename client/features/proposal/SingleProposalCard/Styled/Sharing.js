import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MiddleColumnToRowStyle } from 'Client/ui/Elements/FlexElements';


export const Wrapper = styled(MiddleColumnToRowStyle)`
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
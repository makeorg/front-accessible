import styled from 'styled-components';
import { pxToRem } from 'Src/helpers/styled';
import { Breakpoints } from 'Src/assets/vars/Breakpoints';
import { SpaceBetweenColumnToRow } from 'Src/components/Elements/FlexElements';

const Authentification = styled(SpaceBetweenColumnToRow)`
  width: 100%;
  margin-top: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin-top: ${pxToRem('15px')};
  }
`;


export default Authentification;

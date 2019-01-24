import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { Breakpoints } from 'Assets/vars/Breakpoints';
import { SpaceBetweenColumnToRow } from 'Components/Elements/FlexElements';

const Authentification = styled(SpaceBetweenColumnToRow)`
  width: 100%;
  margin-top: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin-top: ${pxToRem('15px')};
  }
`;


export default Authentification;

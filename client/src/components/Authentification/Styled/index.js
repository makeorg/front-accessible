import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { SpaceBetweenColumnToRow } from 'Client/ui/Elements/FlexElements';

const Authentification = styled(SpaceBetweenColumnToRow)`
  width: 100%;
  margin-top: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin-top: ${pxToRem('15px')};
  }
`;


export default Authentification;

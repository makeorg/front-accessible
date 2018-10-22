import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { SpaceBetweenColumnToRow } from '../../Elements/FlexElements';

const Authentification = styled(SpaceBetweenColumnToRow)`
  width: 100%;
  margin-top: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin-top: ${pxToRem('15px')};
  }
`;


export default Authentification;

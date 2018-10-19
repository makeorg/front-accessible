import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import Breakpoints from '../../../assets/vars/Breakpoints';
import List from './List';

const Sequence = styled.section`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  margin-top: ${pxToRem('40px')};
  max-width: ${Breakpoints.sequenceWidth};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin-top: ${pxToRem('60px')};
  }
`;

/* List */
Sequence.List = List;

export default Sequence;

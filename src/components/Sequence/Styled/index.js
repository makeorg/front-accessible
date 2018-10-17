import styled from 'styled-components';
import { rem } from 'polished';
import Breakpoints from '../../../assets/vars/Breakpoints';
import List from './List';

const Sequence = styled.section`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  margin-top: ${rem('40px')};
  max-width: ${Breakpoints.sequenceWidth};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin-top: ${rem('60px')};
  }
`;

/* List */
Sequence.List = List;

export default Sequence;

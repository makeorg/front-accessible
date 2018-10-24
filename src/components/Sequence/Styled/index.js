import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import Breakpoints from '../../../assets/vars/Breakpoints';
import List from './List';
import { BackArrow, BackButton } from './Button';

const Sequence = styled.section`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  margin-top: ${pxToRem('20px')};
  max-width: ${Breakpoints.sequenceWidth};
  transition: transform 0.5s ease-in;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin-top: ${pxToRem('40px')};
  }
`;

/* List */
Sequence.List = List;
/* BackButton */
Sequence.BackArrow = BackArrow;
Sequence.BackButton = BackButton;

export default Sequence;

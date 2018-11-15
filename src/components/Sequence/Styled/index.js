import styled from 'styled-components';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { Wrapper, List } from './List';
import { BackArrow, BackButton } from './Button';
import { pxToRem } from '../../../helpers/styled';

const Sequence = styled.section`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  height: calc(100% - ${pxToRem('92px')});
  max-width: ${Breakpoints.specialSequenceWidth};
  transition: transform 0.5s ease-in;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
  height: calc(100% - ${pxToRem('97px')});
  }
`;

/* List */
Sequence.Wrapper = Wrapper;
Sequence.List = List;
/* BackButton */
Sequence.BackArrow = BackArrow;
Sequence.BackButton = BackButton;

export default Sequence;

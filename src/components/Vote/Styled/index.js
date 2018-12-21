import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { SpaceBetweenRow } from 'Components/Elements/FlexElements';
import Breakpoints from 'Assets/vars/Breakpoints';
import { ButtonList } from './Button';

const Vote = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${pxToRem('285px')};
  min-width: ${pxToRem('275px')};
  margin: ${pxToRem('15px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin: ${pxToRem('30px')} 0;
  }
`;

export const Wrapper = styled(SpaceBetweenRow)`
  width: 100%;
  justify-content: space-around;
`;

Vote.Wrapper = Wrapper;
/* Buttons */
Vote.ButtonList = ButtonList;

export default Vote;

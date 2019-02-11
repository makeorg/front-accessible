import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { CenterRowStyle } from 'Client/ui/Elements/FlexElements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { ButtonList } from './Button';

const Vote = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: ${pxToRem('275px')};
  margin: ${pxToRem('15px')} 0;
  padding: 0 ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin: ${pxToRem('30px')} 0;
  }
`;

export const Wrapper = styled(CenterRowStyle)`
  width: 100%;
  justify-content: space-around;
  max-width: ${pxToRem('300px')};
`;

Vote.Wrapper = Wrapper;
/* Buttons */
Vote.ButtonList = ButtonList;

export default Vote;
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { SpaceBetweenRow } from '../../Elements/FlexElements';
import { ButtonList } from './Button';

const Vote = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${pxToRem('285px')};
  margin: ${pxToRem('30px')} 0;
`;

export const Wrapper = styled(SpaceBetweenRow)`
  width: 100%;
  justify-content: space-around;
`;

Vote.Wrapper = Wrapper;
/* Buttons */
Vote.ButtonList = ButtonList;

export default Vote;

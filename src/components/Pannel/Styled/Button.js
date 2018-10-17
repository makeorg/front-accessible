import styled from 'styled-components';
import { rem } from 'polished';
import { UnstyledButton } from '../../Elements/ButtonElements';
import { FlexElement } from '../../Elements/FlexElements';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const ButtonWrapper = styled(FlexElement)`
  justify-content: flex-end;
  width: 100%;
  min-height: ${rem('24px')};
  margin-bottom: ${rem('10px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin-bottom: ${rem('40px')};
  }
`;

export const CloseButton = styled(UnstyledButton)`
  font-size: ${rem('24px')};
`;

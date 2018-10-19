import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { UnstyledButton } from '../../Elements/ButtonElements';
import { FlexElement } from '../../Elements/FlexElements';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const ButtonWrapper = styled(FlexElement)`
  justify-content: flex-end;
  width: 100%;
  min-height: ${pxToRem('24px')};
  margin-bottom: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin-bottom: ${pxToRem('20px')};
  }
`;

export const CloseButton = styled(UnstyledButton)`
  font-size: ${pxToRem('24px')};
`;

import styled from 'styled-components';
import { BorderColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const FormErrorsListStyle = styled.ul`
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${BorderColors.ErrorRed};
`;

export const FormErrorStyle = styled.li`
  list-style: none;
`;

export const ErrorMessageStyle = styled.p`
  color: ${BorderColors.ErrorRed};
  margin-bottom: 10px;
  a {
    color: ${BorderColors.ErrorRed};
  }
  font-size: 12px;
  line-height: 16px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
    line-height: 18px;
  }
`;

import styled from 'styled-components';
import { BorderColors } from 'Client/app/assets/vars/Colors';

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
`;

import styled from 'styled-components';
import { BorderColors, FormColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

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

export const FormErrorsContainerStyle = styled.div`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: ${FormColors.ErrorBackground};
  font-size: 12px;
  line-height: 1.5;
`;

export const FormErrorsIntroStyle = styled.p`
  font-family: ${MakeFonts.RobotoBold};
  margin: 0 0 10px;
`;

export const FormErrorsListItemStyle = styled.li`
  margin: 0 0 5px;
  &:last-child {
    margin: 0;
  }
  &:before {
    content: '-  ';
  }
`;

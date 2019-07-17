import styled from 'styled-components';
import { FormColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const FormErrorsContainerStyle = styled.div`
  width: 100%;
  padding: 15px;
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

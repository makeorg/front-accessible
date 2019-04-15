import styled from 'styled-components';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const NoStyleTextInputStyle = styled.input`
  border: none;
  background: transparent;
  background-color: transparent;
`;

export const BasicInputStyle = styled(NoStyleTextInputStyle)`
  width: 100%;
  font-family: ${MakeFonts.RobotoBold};
  color: ${TextColors.DarkGrey};
  font-size: 16px;
  line-height: 38px;
  padding: 0 5px;
`;

import styled from 'styled-components';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const BasicTextAreaStyle = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  background-color: transparent;
  font-family: ${MakeFonts.RobotoBold};
  color: ${TextColors.DarkGrey};
  font-size: 14px;
  line-height: 18px;
  padding: 15px 5px 20px;
  height: 125px;
  resize: none;
`;

export const TextAreaCounterStyle = styled.div`
  font-family: ${MakeFonts.RobotoRegular};
  color: ${TextColors.MediumGrey};
  font-size: 10px;
  line-height: 10px;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

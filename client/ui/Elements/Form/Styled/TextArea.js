import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const BasicTextAreaStyle = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  background: transparent;
  background-color: transparent;
  font-family: ${MakeFonts.CircularStandardBold};
  color: ${TextColors.DarkGrey};
  font-size: 16px;
  line-height: 18px;
  padding: 10px 5px;
  resize: none;
`;

export const TextAreaCounterStyle = styled.div`
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${TextColors.MediumGrey};
  font-size: 10px;
  line-height: 10px;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

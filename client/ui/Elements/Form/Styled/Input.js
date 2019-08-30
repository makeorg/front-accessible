import styled from 'styled-components';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const BasicInputStyle = styled.input`
  border: none;
  background: transparent;
  background-color: transparent;
  width: 100%;
  font-family: ${MakeFonts.CircularStandardBold};
  color: ${TextColors.DarkGrey};
  font-size: 16px;
  line-height: 38px;
  padding: 0 5px;
`;

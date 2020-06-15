import styled from 'styled-components';
import { BasicColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const BasicButtonStyle = styled.button`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  text-transform: uppercase;
  border-radius: 17.5px;
  border: none;
  font-size: 16px;
  width: 234px;
  height: 35px;
  margin: 10px 0px;
`;

export const RedButtonStyle = styled(BasicButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
`;

import styled from 'styled-components';
import { BasicColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const BasicButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  text-transform: uppercase;
  border-radius: 17.5px;
  border: none;
  font-size: 16px;
  padding: 12px 25px 7px 25px;
`;

export const RedButtonStyle = styled(BasicButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
  margin: 50px 0px;
`;

export const LinkAsRedButton = styled(RedButtonStyle)`
  display: inline-flex;
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
    text-decoration: none;
  }
`;

export const ResultsLinkAsRedButton = styled(RedButtonStyle)`
  text-decoration: none;
  width: 263px;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
    text-decoration: none;
  }
`;

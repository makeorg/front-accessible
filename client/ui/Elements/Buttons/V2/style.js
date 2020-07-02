import styled from 'styled-components';
import { BasicColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Link } from 'react-router-dom';

const BasicButtonStyle = `
  display: flex
  justify-content: center;
  align-items: baseline;
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  text-transform: uppercase;
  border-radius: 17.5px;
  border: none;
  font-size: 16px;
  padding: 12px 25px 7px 25px;
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
    text-decoration: none;
  }
`;

const RedStyle = `
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
  .tofill {
    fill: ${BasicColors.PureWhite};
  }
`;

export const RedButtonStyle = styled.button`
  ${BasicButtonStyle};
  ${RedStyle};
`;

export const LinkAsRedButtonStyle = styled(Link)`
  ${BasicButtonStyle};
  ${RedStyle};
`;

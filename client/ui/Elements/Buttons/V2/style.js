import styled from 'styled-components';
import {
  BasicColors,
  MakeThemeColors,
  TextColors,
  BackgroundColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Link } from 'react-router-dom';
import { UnstyledButtonStyle } from '../style';

export const BasicButtonStyle = `
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

const GreyStyle = `
  color: ${TextColors.AltMediumgrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
  .tofill {
    fill: ${TextColors.AltMediumgrey};
  }
`;

export const RedButtonStyle = styled.button`
  ${BasicButtonStyle};
  ${RedStyle};
  &:disabled {
    ${GreyStyle}
  }
`;

export const LinkAsRedButtonStyle = styled(Link)`
  ${BasicButtonStyle};
  ${RedStyle};
  &:disabled {
    ${GreyStyle}
  }
`;

export const GreyUnderlineButtonStyle = styled(UnstyledButtonStyle)`
  font-size: 14px;
  line-height: normal;
  color: ${TextColors.AltMediumgrey};
  text-decoration: underline;
`;

import styled from 'styled-components';
import {
  BasicColors,
  MakeThemeColors,
  TextColors,
  BackgroundColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
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

const ButtonNoBackgroundStyle = `
  font-size: 14px;
  line-height: 1.5;
  text-decoration: underline;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;

const GreyNoBackgroundStyle = `
  color: ${TextColors.AltMediumgrey};
  .tofill {
    fill: ${TextColors.AltMediumgrey};
  }
`;

const RedNoBackgroundStyle = `
  color: ${MakeThemeColors.Red};
  .tofill {
    fill: ${MakeThemeColors.Red};
  }
`;

export const GreyNoBackgroundButtonStyle = styled(UnstyledButtonStyle)`
  ${ButtonNoBackgroundStyle};
  ${GreyNoBackgroundStyle};
`;

export const RedNoBackgroundButtonStyle = styled(UnstyledButtonStyle)`
  ${ButtonNoBackgroundStyle};
  ${RedNoBackgroundStyle};
  &.underline {
  }
`;

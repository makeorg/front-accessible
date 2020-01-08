import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MakeThemeColors, BasicColors } from 'Client/app/assets/vars/Colors';
import {
  RedButtonStyle,
  GreyButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

const linkStyle = color => `
  color: ${color};
  font-size: 12px;
  &:hover,
  &:focus {
    color: ${color};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }

  `;

export const NewWindowIconStyle = {
  marginLeft: '5px',
  fill: MakeThemeColors.Red,
};

export const RedLinkStyle = styled(Link)`
  ${linkStyle(MakeThemeColors.Red)}
`;

export const MailToRedLinkStyle = styled.a`
  ${linkStyle(MakeThemeColors.Red)}
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

export const LinkAsGreyButton = styled(GreyButtonStyle)`
  display: inline-flex;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

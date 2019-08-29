/* @flow */

import styled from 'styled-components';
import { MakeThemeColors, BasicColors } from 'Client/app/assets/vars/Colors';
import {
  RedButtonStyle,
  GreyButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const RedLinkStyle = styled.a`
  color: ${MakeThemeColors.Red};
  font-size: 12px;
  &:hover,
  &:focus {
    color: ${MakeThemeColors.Red};
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 16px;
  }
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

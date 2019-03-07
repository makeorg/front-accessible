/* @flow */

import styled from 'styled-components';
import { MakeThemeColors, BasicColors } from 'Client/app/assets/vars/Colors';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const RedLink = styled.a`
  color: ${MakeThemeColors.Red};
  &:hover,
  &:focus {
    color: ${MakeThemeColors.Red};
  }
`;

export const LinkAsRedButton = styled(RedButtonStyle)`
  display: inline-block;
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
    text-decoration: none;
  }
`;

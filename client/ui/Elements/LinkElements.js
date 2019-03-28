/* @flow */

import styled from 'styled-components';
import { MakeThemeColors, BasicColors } from 'Client/app/assets/vars/Colors';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const RedLinkStyle = styled.a`
  text-decoration: none;
  color: ${MakeThemeColors.Red};
  &:hover,
  &:focus {
    color: ${MakeThemeColors.Red};
  }
`;

export const ParagraphRedLinkStyle = styled(RedLinkStyle)`
  font-size: 12px;
  line-height: normal;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 14px;
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

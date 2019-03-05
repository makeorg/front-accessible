/* @flow */

import styled from 'styled-components';
import { MakeThemeColors } from 'Client/app/assets/vars/Colors';

export const RedLink = styled.a`
  color: ${MakeThemeColors.Red};
  &:hover,
  &:focus {
    color: ${MakeThemeColors.Red};
  }
`;

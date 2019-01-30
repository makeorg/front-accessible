/* @flow */

import { createGlobalStyle } from 'styled-components';
import { MakeThemeColors } from '../vars/Colors';

export const UIThemeStylesheet = createGlobalStyle`
  .red-link {
    color: ${MakeThemeColors.Red};
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${MakeThemeColors.Red};
      text-decoration: underline;
    }
  }
`;

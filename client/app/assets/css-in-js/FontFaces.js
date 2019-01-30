/* @flow */

import { createGlobalStyle } from 'styled-components';
import RobotoCondensedBoldWoff from '../fonts/RobotoCondensed-Bold.woff';
import RobotoCondensedBoldWoff2 from '../fonts/RobotoCondensed-Bold.woff2';
import RobotoBoldWoff from '../fonts/Roboto-Bold.woff';
import RobotoBoldWoff2 from '../fonts/Roboto-Bold.woff2';
import RobotoRegularWoff from '../fonts/Roboto-Regular.woff';
import RobotoRegularWoff2 from '../fonts/Roboto-Regular.woff2';

export const FontFacesStylesheet = createGlobalStyle`
  @font-face {
      font-family: 'Roboto Condensed Bold';
      font-display: swap;
      src: url(${RobotoCondensedBoldWoff}) format("woff"),
           url(${RobotoCondensedBoldWoff2}) format("woff2");
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto Bold';
      font-display: swap;
      src: url(${RobotoBoldWoff}) format("woff"),
           url(${RobotoBoldWoff2}) format("woff2");
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto Regular';
      font-display: swap;
      src: url(${RobotoRegularWoff}) format("woff"),
           url(${RobotoRegularWoff2}) format("woff2");
      font-weight: normal;
      font-style: normal;
  }
`;

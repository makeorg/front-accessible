/* @flow */

import { createGlobalStyle } from 'styled-components';
import TradeGothicWoff from '../fonts/TradeGothicLTStd-BdCn20.woff';
import TradeGothicWoff2 from '../fonts/TradeGothicLTStd-BdCn20.woff2';
import CircularBoldWoff from '../fonts/CircularStd-Bold.woff';
import CircularBoldWoff2 from '../fonts/CircularStd-Bold.woff2';
import CircularBookWoff from '../fonts/CircularStd-Book.woff';
import CircularBookWoff2 from '../fonts/CircularStd-Book.woff2';

export const FontFacesStylesheet = createGlobalStyle`
  @font-face {
      font-family: 'Trade Gothic';
      src: url(${TradeGothicWoff}) format("woff"),
           url(${TradeGothicWoff2}) format("woff2");
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Circular Bold';
      src: url(${CircularBoldWoff}) format("woff"),
           url(${CircularBoldWoff2}) format("woff2");
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Circular Book';
      src: url(${CircularBookWoff}) format("woff"),
           url(${CircularBookWoff2}) format("woff2");
      font-weight: normal;
      font-style: normal;
  }
`;

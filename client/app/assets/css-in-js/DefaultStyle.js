/* @flow */

import { createGlobalStyle } from 'styled-components';
import { MakeFonts } from '../vars/Fonts';
import { BasicColors } from '../vars/Colors';

export const DefaultStylesheet = createGlobalStyle`
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: ${MakeFonts.RobotoRegular};
    color: ${BasicColors.PureBlack};
    background-color: ${BasicColors.PureWhite};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${MakeFonts.RobotoCondensedBold}, Arial;
    text-transform: uppercase;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 0;
  }

  a {
    font-family: ${MakeFonts.RobotoBold}, Arial;
    color: ${BasicColors.PureBlack};
    text-decoration: underline;
  }

  input,
  a:hover,
  a:focus {
    color: ${BasicColors.PureBlack};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  label {
    font-family: ${MakeFonts.RobotoBold}, Arial;
    color: ${BasicColors.PureBlack};
  }

  a,
  label,
  button {
    cursor: pointer
  }

  button:disabled {
    cursor: not-allowed;
  }

  ul,
  p,
  form,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
`;

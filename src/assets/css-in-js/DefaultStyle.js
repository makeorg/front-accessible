import { createGlobalStyle } from 'styled-components';
import { MakeFonts } from '../vars/Fonts';
import { BasicColors } from '../vars/Colors';

const DefaultStylesheet = createGlobalStyle`
  body {
    font-family: ${MakeFonts.CircularBook};
    color: ${BasicColors.PureBlack};
    background: ${BasicColors.PureWhite};
    background-color: ${BasicColors.PureWhite};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${MakeFonts.TradeGothic}, Arial;
    text-transform: uppercase;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 0;
  }

  a {
    font-family: ${MakeFonts.CircularBold}, Arial;
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
    font-family: ${MakeFonts.CircularBold}, Arial;
    color: ${BasicColors.PureBlack};
  }

  label:hover,
  button:hover {
    cursor: pointer
  }

  button:disabled {
    cursor: not-allowed;
  }

  ul,
  p,
  form,
  blockquote {
    margin: 0;
  }
`;

export default DefaultStylesheet;

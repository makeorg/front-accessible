import { createGlobalStyle } from 'styled-components';
import Fonts from '../vars/Fonts';
import { Colors } from '../vars/Colors';

const DefaultStyle = createGlobalStyle`
  body {
    font-family: ${Fonts.CircularBook};
    color: ${Colors.PureBlack};
    background: ${Colors.PureWhite};
    background-color: ${Colors.PureWhite};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${Fonts.TradeGothic};
    text-transform: uppercase;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 0;
  }

  a {
    font-family: ${Fonts.CircularBold};
    color: ${Colors.PureBlack};
    text-decoration: underline;
  }

  a:hover,
  a:focus {
    color: ${Colors.PureBlack};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default DefaultStyle;

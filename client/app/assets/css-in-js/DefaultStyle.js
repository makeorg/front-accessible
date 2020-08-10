// @flow
import { createGlobalStyle } from 'styled-components';
import {
  NAVIGATION_ARIA_CLASS,
  NAVIGATION_ELEMENT_ARIA_CLASS,
  SEARCH_ARIA_CLASS,
  SEARCH_ELEMENT_ARIA_CLASS,
  ADD_ARIA_ANIMATION,
  REMOVE_ARIA_ANIMATION,
} from 'Shared/constants/a11y';
import { MakeFonts } from '../vars/Fonts';
import { BasicColors } from '../vars/Colors';

export const DefaultStylesheet = createGlobalStyle`
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${MakeFonts.CircularStandardBook};
    color: ${BasicColors.PureBlack};
    &.locked {
      overflow-y: hidden;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${MakeFonts.TradeGothicBoldCondensed};
    text-transform: uppercase;
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 0;
  }

  a {
    font-family: ${MakeFonts.CircularStandardBook};
    color: ${BasicColors.PureBlack};
    text-decoration: underline;
  }

  input,
  a:hover,
  a:focus {
    color: ${BasicColors.PureBlack};
  }

  img {
    display: flex;
    max-width: 100%;
  }

  label {
    font-family: ${MakeFonts.CircularStandardBold};
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

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1
    }
  }

  .${ADD_ARIA_ANIMATION},
  .${ADD_ARIA_ANIMATION} a,
  .${ADD_ARIA_ANIMATION} button,
  .${ADD_ARIA_ANIMATION} input {
    animation-name: fadeOut;
    animation-duration: 1s;
    animation-iteration-count: 1;
  }

  .${SEARCH_ELEMENT_ARIA_CLASS}.${ADD_ARIA_ANIMATION},
  .${SEARCH_ARIA_CLASS}.${ADD_ARIA_ANIMATION} {
    animation-duration: 0.25s;
  }

  .${SEARCH_ELEMENT_ARIA_CLASS}.${REMOVE_ARIA_ANIMATION},
  .${SEARCH_ARIA_CLASS}.${REMOVE_ARIA_ANIMATION} {
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-iteration-count: 1;
  }

  .${NAVIGATION_ELEMENT_ARIA_CLASS}[aria-hidden="true"],
  .${NAVIGATION_ARIA_CLASS}[aria-hidden="true"] a,
  .${NAVIGATION_ARIA_CLASS}[aria-hidden="true"] input,
  .${NAVIGATION_ARIA_CLASS}[aria-hidden="true"] button,
  .${SEARCH_ELEMENT_ARIA_CLASS}[aria-hidden="true"],
  .${SEARCH_ARIA_CLASS}[aria-hidden="true"] a,
  .${SEARCH_ARIA_CLASS}[aria-hidden="true"] input,
  .${SEARCH_ARIA_CLASS}[aria-hidden="true"] button {
    visibility: hidden;
  }

`;

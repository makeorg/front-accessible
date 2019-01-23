/* @flow */

import { createGlobalStyle } from 'styled-components';

const AnimationsStylesheet = createGlobalStyle`
  .fadein-enter-active {
    animation-duration: 0.5s;
    animation-name: FadeIn;
    transition: opacity 0.5s ease-in;
  }

  .fadein-enter,
  .fadein-exit,
  .fadein-exit-active,
  .fadein-exit-done,
  .fadein-appear
  .fadein-appear-active {
    opacity: 0
  }

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default AnimationsStylesheet;

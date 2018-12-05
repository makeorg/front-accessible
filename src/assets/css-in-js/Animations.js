/* @flow */

import { createGlobalStyle } from 'styled-components';

const AnimationsStylesheet = createGlobalStyle`
  .closed-pannel {
    transform: translate(50%,0);
  }
  .opened-pannel {
    transform: translate(50%,-100%);
  }
  .collapsed-sequence {
    transform: translateY(90%);
  }
  .expanded-sequence {
    transform: translateY(0);
  }
  .collapsed-card {
    transform: translateY(125%);
  }
  .scaled-list {
    transform: scale(0.95);
  }
  .unscaled-list {
    transform: scale(1);
  }
  .locked-content {
    overflow: hidden !important;
  }

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

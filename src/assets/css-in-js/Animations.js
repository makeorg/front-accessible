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
`;

export default AnimationsStylesheet;

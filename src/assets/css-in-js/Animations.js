import { createGlobalStyle } from 'styled-components';

const AnimationsStylesheet = createGlobalStyle`
  .closed-pannel {
    transform: translate(50%,0);
  }
  .opened-pannel {
    transform: translate(50%,-100%);
  }
`;

export default AnimationsStylesheet;

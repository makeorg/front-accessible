import { createGlobalStyle } from 'styled-components';

export const ConsultationNavSliderParams = {
  type: 'slider',
  rewind: false,
  perView: 1.75,
  gap: 0,
  peek: {
    before: 0,
    after: 0,
  },
};

export const ConsultationNavSliderStylesheet = createGlobalStyle`
  .consultationnav {
    position: relative;
    width: 100%;
    box-sizing: border-box; 
  }
  .consultationnav * {
    box-sizing: inherit; 
  }
  .consultationnav__track {
    overflow: hidden; 
  }
  .consultationnav__slides {
    position: relative;
    width: 100%;
    list-style: none;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    will-change: transform; 
  }
  .consultationnav__slides--dragging {
    user-select: none; 
  }
  .consultationnav__slide {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
  }
  .consultationnav__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; 
  }
  .consultationnav__arrows {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .consultationnav__bullets {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .consultationnav--rtl {
    direction: rtl; 
  }
`;

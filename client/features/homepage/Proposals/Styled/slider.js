import { createGlobalStyle } from 'styled-components';

export const ShowcaseSliderParams = {
  type: 'slider',
  rewind: false,
  perView: 2,
  gap: 30,
  breakpoints: {
    '969': {
      gap: 15,
      peek: {
        before: 15,
        after: 15,
      },
    },
    '767': {
      perView: 1,
      gap: 10,
      peek: {
        before: 15,
        after: 30,
      },
    },
  },
  peek: {
    before: 0,
    after: 0,
  },
};

export const PopularShowcaseStylesheet = createGlobalStyle`
  .popular {
    position: relative;
    width: 100%;
    box-sizing: border-box; 
  }
  .popular * {
    box-sizing: inherit; 
  }
  .popular__track {
    overflow: hidden; 
  }
  .popular__slides {
    position: relative;
    width: 100%;
    list-style: none;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    padding: 0 0 2px;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    will-change: transform; 
  }
  .popular__slides--dragging {
    user-select: none; 
  }
  .popular__slide {
    display: flex;
    width: 100%;
    height: auto;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
  }
  .popular__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; 
  }
  .popular__arrows {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .popular__bullets {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .popular--rtl {
    direction: rtl; 
  }
`;

export const ControversialShowcaseStylesheet = createGlobalStyle`
  .controversial {
    position: relative;
    width: 100%;
    box-sizing: border-box; 
  }
  .controversial * {
    box-sizing: inherit; 
  }
  .controversial__track {
    overflow: hidden; 
  }
  .controversial__slides {
    position: relative;
    width: 100%;
    list-style: none;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    padding: 0 0 2px;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    will-change: transform; 
  }
  .controversial__slides--dragging {
    user-select: none; 
  }
  .controversial__slide {
    display: flex;
    width: 100%;
    height: auto;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
  }
  .controversial__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; 
  }
  .controversial__arrows {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .controversial__bullets {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .controversial--rtl {
    direction: rtl; 
  }
`;

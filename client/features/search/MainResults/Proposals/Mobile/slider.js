import { createGlobalStyle } from 'styled-components';

export const SearchSliderParams = {
  type: 'slider',
  rewind: false,
  perView: 1,
  gap: 10,
  peek: {
    before: 15,
    after: 30,
  },
};

export const SearchSliderStylesheet = createGlobalStyle`
  .searchslider {
    position: relative;
    width: 100%;
    box-sizing: border-box; 
  }
  .searchslider * {
    box-sizing: inherit; 
  }
  .searchslider__track {
    overflow: hidden; 
  }
  .searchslider__slides {
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
  .searchslider__slides--dragging {
    user-select: none; 
  }
  .searchslider__slide {
    display: flex;
    width: 100%;
    height: auto;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
  }
  .searchslider__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; 
  }
  .searchslider__arrows {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .searchslider__bullets {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .searchslider--rtl {
    direction: rtl; 
  }
`;

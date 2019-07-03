import { createGlobalStyle } from 'styled-components';

export const GliderStylesheet = createGlobalStyle`
  .glide {
    position: relative;
    width: 100%;
    box-sizing: border-box; 
  }
  .glide * {
    box-sizing: inherit; 
  }
  .glide__track {
    overflow: hidden; 
  }
  .glide__slides {
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
  .glide__slides--dragging {
    user-select: none; 
  }
  .glide__slide {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
  }
  .glide__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; 
  }
  .glide__arrows {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .glide__bullets {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .glide--rtl {
    direction: rtl; 
  }

`;

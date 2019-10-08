import { createGlobalStyle } from 'styled-components';

export const CartographySliderParams = {
  type: 'slider',
  rewind: true,
  perView: 1,
  gap: 0,
  peek: {
    before: 0,
    after: 0,
  },
};

export const ParticipationSliderParams = {
  type: 'slider',
  rewind: true,
  perView: 1,
  gap: 0,
  peek: {
    before: 0,
    after: 0,
  },
};

export const CartographySliderStylesheet = createGlobalStyle`
  .cartography {
    position: relative;
    width: 100%;
    box-sizing: border-box; 
  }
  .cartography * {
    box-sizing: inherit; 
  }
  .cartography__track {
    overflow: hidden; 
  }
  .cartography__slides {
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
  .cartography__slides--dragging {
    user-select: none; 
  }
  .cartography__slide {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
  }
  .cartography__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; 
  }
  .cartography__arrows {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .cartography__bullets {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .cartography--rtl {
    direction: rtl; 
  }
`;

export const ParticipationSliderStylesheet = createGlobalStyle`
  .participation {
    position: relative;
    width: 100%;
    box-sizing: border-box; 
  }
  .participation * {
    box-sizing: inherit; 
  }
  .participation__track {
    overflow: hidden; 
  }
  .participation__slides {
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
  .participation__slides--dragging {
    user-select: none; 
  }
  .participation__slide {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
  }
  .participation__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; 
  }
  .participation__arrows {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .participation__bullets {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .participation--rtl {
    direction: rtl; 
  }
`;

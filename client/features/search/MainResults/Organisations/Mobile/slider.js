import { createGlobalStyle } from 'styled-components';

export const SearchOrganisationsSliderParams = {
  type: 'slider',
  rewind: false,
  perView: 1,
  gap: 10,
  peek: {
    before: 20,
    after: 30,
  },
};

export const SearchOrganisationsSliderStylesheet = createGlobalStyle`
  .search-organisations-slider {
    position: relative;
    width: 100%;
    box-sizing: border-box; 
  }
  .search-organisations-slider * {
    box-sizing: inherit; 
  }
  .search-organisations-slider__track {
    overflow: hidden; 
  }
  .search-organisations-slider__slides {
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
  .search-organisations-slider__slides--dragging {
    user-select: none; 
  }
  .search-organisations-slider__slide {
    display: flex;
    width: 100%;
    height: auto;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
  }
  .search-organisations-slider__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; 
  }
  .search-organisations-slider__arrows {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .search-organisations-slider__bullets {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .search-organisations-slider--rtl {
    direction: rtl; 
  }
`;

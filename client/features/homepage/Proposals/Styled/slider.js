import { createGlobalStyle } from 'styled-components';
import Glide from '@glidejs/glide';

export const ControversialSlider = new Glide('.controversial_proposal', {
  type: 'carousel',
  rewind: false,
  peek: {
    before: 15,
    after: 30,
  },
  gap: 15,
  classes: {
    direction: {
      ltr: 'controversial_proposal--ltr',
      rtl: 'controversial_proposal--rtl',
    },
    slider: 'controversial_proposal--slider',
    carousel: 'controversial_proposal--carousel',
    swipeable: 'controversial_proposal--swipeable',
    dragging: 'controversial_proposal--dragging',
    cloneSlide: 'controversial_proposal__slide--clone',
    activeNav: 'controversial_proposal__bullet--active',
    activeSlide: 'controversial_proposal__slide--active',
    disabledArrow: 'controversial_proposal__arrow--disabled',
  },
});

export const ProposalListSlider = new Glide('.popular_proposal', {
  type: 'carousel',
  rewind: false,
  peek: {
    before: 15,
    after: 30,
  },
  gap: 15,
  classes: {
    direction: {
      ltr: 'popular_proposal--ltr',
      rtl: 'popular_proposal--rtl',
    },
    slider: 'popular_proposal--slider',
    carousel: 'popular_proposal--carousel',
    swipeable: 'popular_proposal--swipeable',
    dragging: 'popular_proposal--dragging',
    cloneSlide: 'popular_proposal__slide--clone',
    activeNav: 'popular_proposal__bullet--active',
    activeSlide: 'popular_proposal__slide--active',
    disabledArrow: 'popular_proposal__arrow--disabled',
  },
});

export const ControversialStylesheet = createGlobalStyle`
  .controversial_proposal_wrapper{
    overflow: hidden;
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
  }
  .controversial_proposal {
    position: relative;
    width: 100%;
    box-sizing: border-box; 
  }
  .controversial_proposal * {
    box-sizing: inherit; 
  }
  .controversial_proposal__track {
    overflow: hidden; 
  }
  .controversial_proposal__slides {
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
  .controversial_proposal__slides--dragging {
    user-select: none; 
  }
  .controversial_proposal__slide {
    display: flex;
    width: 100%;
    height: auto;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
  }
  .controversial_proposal__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; 
  }
  .controversial_proposal__arrows {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .controversial_proposal__bullets {
    -webkit-touch-callout: none;
    user-select: none; 
  }
  .controversial_proposal--rtl {
    direction: rtl; 
  }
`;

export const ProposalListStylesheet = createGlobalStyle`
.popular_proposal_wrapper{
  overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
}
.popular_proposal {
  position: relative;
  width: 100%;
  box-sizing: border-box; 
}
.popular_proposal * {
  box-sizing: inherit; 
}
.popular_proposal__track {
  overflow: hidden; 
}
.popular_proposal__slides {
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
.popular_proposal__slides--dragging {
  user-select: none; 
}
.popular_proposal__slide {
  display: flex;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  white-space: normal;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent; 
}
.popular_proposal__slide a {
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none; 
}
.popular_proposal__arrows {
  -webkit-touch-callout: none;
  user-select: none; 
}
.popular_proposal__bullets {
  -webkit-touch-callout: none;
  user-select: none; 
}
.popular_proposal--rtl {
  direction: rtl; 
}
`;

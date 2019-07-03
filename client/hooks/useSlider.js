// @flow

import { useEffect } from 'react';
import Glide from '@glidejs/glide';

export const useSlider = (
  canMount: boolean,
  mountedCallback: () => void,
  moveCallback: () => void,
  afterMoveCallback: () => void
) => {
  const slider = new Glide('.glide', {
    type: 'carousel',
    perView: 4,
    gap: 30,
    breakpoints: {
      '969': {
        gap: 15,
      },
      '767': {
        perView: 2,
        gap: 15,
      },
    },
  });

  useEffect(() => {
    if (canMount) {
      return undefined;
    }

    slider.mount();

    mountedCallback();
    slider.on('move', () => {
      moveCallback();
    });
    slider.on('run.after', () => {
      afterMoveCallback();
    });

    return () => slider.destroy();
  }, [canMount]);

  return slider;
};

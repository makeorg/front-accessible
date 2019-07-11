// @flow
import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { type TypeSliderParams } from 'Shared/types/views';

const removeCurrentAria = (sliderName: string) => {
  const slides: NodeList<HTMLElement> | null = document.querySelectorAll(
    `.${sliderName}__slide`
  );

  if (slides) {
    const slidesArray: Array<HTMLElement> = Array.from(slides);

    slidesArray.map(slide => slide.removeAttribute('aria-current'));
  }
};

const setCurrentAria = (sliderName: string) => {
  const activeSlide: Element | null = document.querySelector(
    `.${sliderName}__slide--active`
  );

  if (activeSlide) {
    activeSlide.setAttribute('aria-current', 'true');
  }
};

const setBusyAria = (sliderName: string) => {
  const slidesList: Element | null = document.querySelector(
    `.${sliderName}_slides`
  );
  if (slidesList) {
    slidesList.setAttribute('aria-busy', 'true');
  }
};

const removeBusyAria = (sliderName: string) => {
  const slidesList: Element | null = document.querySelector(
    `.${sliderName}_slides`
  );
  if (slidesList) {
    slidesList.setAttribute('aria-busy', 'false');
  }
};

export const useSlider = (
  sliderName: string,
  sliderParams: TypeSliderParams,
  canMount: boolean
) => {
  const slider = new Glide(`.${sliderName}`, {
    type: sliderParams.type,
    rewind: sliderParams.rewind,
    perView: sliderParams.perView,
    gap: sliderParams.gap,
    breakpoints: sliderParams.breakpoints,
    peek: sliderParams.peek,
    bound: true,
    classes: {
      direction: {
        ltr: `${sliderName}--ltr`,
        rtl: `${sliderName}--rtl`,
      },
      slider: `${sliderName}--slider`,
      carousel: `${sliderName}--carousel`,
      swipeable: `${sliderName}--swipeable`,
      dragging: `${sliderName}--dragging`,
      cloneSlide: `${sliderName}__slide--clone`,
      activeNav: `${sliderName}__bullet--active`,
      activeSlide: `${sliderName}__slide--active`,
      disabledArrow: `${sliderName}__arrow--disabled`,
    },
  });

  useEffect(() => {
    if (canMount) {
      return undefined;
    }

    slider.mount();

    setCurrentAria(sliderName);
    slider.on('move', () => {
      setBusyAria(sliderName);
    });
    slider.on('run.after', () => {
      removeBusyAria(sliderName);
      removeCurrentAria(sliderName);
      setCurrentAria(sliderName);
    });

    return () => slider.destroy();
  }, [canMount]);

  return slider;
};

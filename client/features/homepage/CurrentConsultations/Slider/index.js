// @flow
export const removeCurrentAria = () => {
  const slides: NodeList<HTMLElement> | null = document.querySelectorAll(
    '.glide__slide'
  );

  if (slides) {
    const slidesArray: Array<HTMLElement> = Array.from(slides);

    slidesArray.map(slide => slide.removeAttribute('aria-current'));
  }
};

export const setCurrentAria = () => {
  const activeSlide: Element | null = document.querySelector(
    '.glide__slide--active'
  );

  if (activeSlide) {
    activeSlide.setAttribute('aria-current', 'true');
  }
};

export const setBusyAria = () => {
  const slidesList: Element | null = document.querySelector('.glide__slides');
  if (slidesList) {
    slidesList.setAttribute('aria-busy', 'true');
  }
};

export const removeBusyAria = () => {
  const slidesList: Element | null = document.querySelector('.glide__slides');
  if (slidesList) {
    slidesList.setAttribute('aria-busy', 'false');
  }
};

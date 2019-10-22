import { type TypeInteractiveChildren } from 'Shared/types/views';
// Define by default all slides with aria hidden
export const setAriaHidden = (glider: TypeElementRef<any>) => {
  const slides: NodeList<HTMLElement> | null = glider.querySelectorAll(
    '.glider-slide'
  );
  if (slides) {
    const slidesArray: Array<HTMLElement> = Array.from(slides);

    slidesArray.map(slide => slide.setAttribute('aria-hidden', 'true'));
  }
};

// Disabling aria hidden for all visible slides
export const handleVisibleSlides = (glider: TypeElementRef<any>) => {
  const visibleSlides: NodeList<HTMLElement> | null = glider.querySelectorAll(
    '.glider-slide.visible'
  );

  if (visibleSlides) {
    const visibleSlidesArray: Array<HTMLElement> = Array.from(visibleSlides);

    visibleSlidesArray.map(slide => slide.setAttribute('aria-hidden', 'false'));
  }
};

const getInteractiveElements = (
  slide: HTMLElement,
  interactiveChildren: TypeInteractiveChildren
) => {
  let linksArray = [];
  let inputsArray = [];
  let buttonsArray = [];

  if (interactiveChildren.inputs) {
    inputsArray = Array.from(slide.querySelectorAll('input'));
  }
  if (interactiveChildren.links) {
    linksArray = Array.from(slide.querySelectorAll('a'));
  }
  if (interactiveChildren.buttons) {
    buttonsArray = Array.from(slide.querySelectorAll('button'));
  }

  const interactiveElementsArray = linksArray
    .concat(inputsArray)
    .concat(buttonsArray);

  return interactiveElementsArray;
};

// Set Negative tab index by default on all interactive elements in the slide
const disableTabIndex = (elementsArray: HTMLElement[]) => {
  if (!elementsArray) {
    return null;
  }

  return elementsArray.map(element => element.setAttribute('tabindex', '-1'));
};

const setTabIdex = (
  glider: TypeElementRef<any>,
  interactiveChildren: TypeInteractiveChildren
) => {
  const slides: NodeList<HTMLElement> | null = glider.querySelectorAll(
    '.glider-slide'
  );

  if (slides) {
    const slidesArray: Array<HTMLElement> = Array.from(slides);

    slidesArray.map(slide => {
      const interactiveElementsArray = getInteractiveElements(
        slide,
        interactiveChildren
      );
      return disableTabIndex(interactiveElementsArray);
    });
  }
};

// Set Postivie tab index on all interactive elements in the visible slide
const enableTabIndex = (elementsArray: HTMLElement[]) => {
  if (!elementsArray) {
    return null;
  }

  return elementsArray.map(element => element.setAttribute('tabindex', '0'));
};

const setTabIdexForVisibleSlides = (
  glider: TypeElementRef<any>,
  interactiveChildren: TypeInteractiveChildren
) => {
  const slides: NodeList<HTMLElement> | null = glider.querySelectorAll(
    '.glider-slide.visible'
  );

  if (slides) {
    const slidesArray: Array<HTMLElement> = Array.from(slides);

    slidesArray.map(slide => {
      const interactiveElementsArray = getInteractiveElements(
        slide,
        interactiveChildren
      );
      return enableTabIndex(interactiveElementsArray);
    });
  }
};

// Define aria current role for active slide
export const setActiveSlide = (glider: TypeElementRef<any>) => {
  const activeSlide: HTMLElement | null = glider.querySelector(
    '.glider-slide.active'
  );

  if (activeSlide) {
    activeSlide.setAttribute('aria-current', 'true');
    activeSlide.setAttribute('tabindex', '0');
  }
};

// Focus active slide
export const focusActiveSlide = (glider: TypeElementRef<any>) => {
  const activeSlide: HTMLElement | null = glider.querySelector(
    '.glider-slide.active'
  );

  if (activeSlide) {
    activeSlide.focus();
  }
};

// Disabling aria current role
export const resetActiveSlide = (glider: TypeElementRef<any>) => {
  const slides: NodeList<HTMLElement> | null = glider.querySelectorAll(
    '.glider-slide'
  );

  if (slides) {
    const slidesArray: Array<HTMLElement> = Array.from(slides);

    slidesArray.map(slide => {
      slide.removeAttribute('aria-current');
      return slide.removeAttribute('tabIndex');
    });
  }
};

// Handling slide index and injectt it in dom node
export const setCounter = (counterName: string, index: number) => {
  const counter: Element | null = document.querySelector(counterName);
  if (counter) {
    counter.innerHTML = `${index + 1}`;
  }
};

// Enabling a11y Rules.
export const setA11yRules = (
  glider: TypeElementRef<any>,
  interactiveChildren?: TypeInteractiveChildren
) => {
  if (interactiveChildren) {
    setTabIdex(glider, interactiveChildren);
    setTabIdexForVisibleSlides(glider, interactiveChildren);
  }
};

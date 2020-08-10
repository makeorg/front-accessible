// @flow
import {
  ADD_ARIA_ANIMATION,
  REMOVE_ARIA_ANIMATION,
} from 'Shared/constants/a11y';

export const addAriaAttribute = (element: any) => {
  if (!element) {
    return undefined;
  }

  return element.setAttribute('aria-hidden', 'true');
};

export const addAriaHidden = (
  className: string,
  animationTiming?: number = 500
) => {
  const elementsCollection = document.querySelectorAll(`.${className}`);
  const elementsArray = Array.from(elementsCollection);

  if (!elementsCollection || elementsArray.length === 0) {
    return undefined;
  }

  const elementWithAttribute: any = elementsArray.map(element => {
    element.classList.add(ADD_ARIA_ANIMATION);
    const timer = setTimeout(() => addAriaAttribute(element), animationTiming);
    return () => clearTimeout(timer);
  });

  return elementWithAttribute;
};

export const removeAriaHidden = (
  className: string,
  animationTiming?: number = 500
) => {
  const elementsCollection = document.querySelectorAll(`.${className}`);
  const elementsArray = Array.from(elementsCollection);

  if (!elementsCollection || elementsArray.length === 0) {
    return undefined;
  }

  const elementWithoutAttribute: any = elementsArray.map(element => {
    element.removeAttribute('aria-hidden');
    element.classList.remove(ADD_ARIA_ANIMATION);
    element.classList.add(REMOVE_ARIA_ANIMATION);
    const timer = setTimeout(
      () => element.classList.remove(REMOVE_ARIA_ANIMATION),
      animationTiming
    );
    return () => clearTimeout(timer);
  });

  return elementWithoutAttribute;
};

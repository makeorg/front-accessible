// @flow
import {
  SEARCH_DESKTOP_EXPANDED,
  ADD_SEARCH_DESKTOP_ANIMATION,
  REMOVE_SEARCH_DESKTOP_ANIMATION,
} from 'Shared/constants/a11y';
import { addAriaAttribute } from 'Shared/helpers/a11y';

export const addSearchDesktopHidden = (animationTiming?: number = 250) => {
  const elementsCollection = document.querySelectorAll(
    `.${SEARCH_DESKTOP_EXPANDED}`
  );
  const elementsArray = Array.from(elementsCollection);

  if (!elementsCollection || elementsArray.length === 0) {
    return undefined;
  }

  const elementWithAttribute: any = elementsArray.map(element => {
    element.classList.add(ADD_SEARCH_DESKTOP_ANIMATION);
    const timer = setTimeout(() => {
      addAriaAttribute(element);
    }, animationTiming);
    return () => clearTimeout(timer);
  });

  return elementWithAttribute;
};

export const removeSearchDesktopHidden = (animationTiming?: number = 250) => {
  const elementsCollection = document.querySelectorAll(
    `.${SEARCH_DESKTOP_EXPANDED}`
  );
  const elementsArray = Array.from(elementsCollection);

  if (!elementsCollection || elementsArray.length === 0) {
    return undefined;
  }

  const elementWithoutAttribute: any = elementsArray.map(element => {
    const firstTimer = setTimeout(() => {
      element.classList.remove(ADD_SEARCH_DESKTOP_ANIMATION);
      element.classList.add(REMOVE_SEARCH_DESKTOP_ANIMATION);
      element.removeAttribute('aria-hidden');
    }, animationTiming);
    const secondTimer = setTimeout(
      () => element.classList.remove(REMOVE_SEARCH_DESKTOP_ANIMATION),
      animationTiming * 2
    );
    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  });

  return elementWithoutAttribute;
};

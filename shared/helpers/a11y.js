// @flow
import { FADE_OUT_ANIMATION, FADE_IN_ANIMATION } from 'Shared/constants/a11y';

export const addAriaHiddenAndNegativeTab = (className: string) => {
  /** get elements by className and tranform the NodeList in Array */
  const elementsCollection = document.querySelectorAll(`.${className}`);
  const elementsArray = Array.from(elementsCollection);

  if (!elementsCollection || elementsArray.length === 0) {
    return undefined;
  }

  /** map to add interractiveChildren in an Array, set aria-hidden on element to avoid screen reading */
  const interractiveChildrenArray: any = elementsArray.map(element => {
    const childrenCollection = element.querySelectorAll('a, input, button');
    const childrenArray = Array.from(childrenCollection);

    if (!childrenCollection || childrenArray.length === 0) {
      return undefined;
    }

    element.setAttribute('aria-hidden', 'true');

    return childrenArray;
  });

  if (!interractiveChildrenArray || interractiveChildrenArray.length === 0) {
    return undefined;
  }

  /** flat interractiveChildren Array, and set tab index on children to avoid focus */
  const interractiveChildren: any = interractiveChildrenArray.flat();

  return interractiveChildren.map(interractiveChild =>
    interractiveChild.setAttribute('tabindex', '-1')
  );
};

export const removeAriaHiddenAndNegativeTab = (className: string) => {
  /** get elements by className and tranform the NodeList in Array */
  const elementsCollection = document.querySelectorAll(`.${className}`);
  const elementsArray = Array.from(elementsCollection);

  if (!elementsCollection || elementsArray.length === 0) {
    return undefined;
  }

  /** map to add interractiveChildren in an Array, remove aria-hidden on element to avoid screen reading */
  const interractiveChildrenArray: any = elementsArray.map(element => {
    const childrenCollection = element.querySelectorAll('a, input, button');
    const childrenArray = Array.from(childrenCollection);

    if (!childrenCollection || childrenArray.length === 0) {
      return undefined;
    }

    element.removeAttribute('aria-hidden');

    return childrenArray;
  });

  if (!interractiveChildrenArray || interractiveChildrenArray.length === 0) {
    return undefined;
  }

  const interractiveChildren: any = interractiveChildrenArray.flat();

  /** flat interractiveChildren Array, and set tab index on children to avoid focus */
  return interractiveChildren.map(interractiveChild =>
    interractiveChild.removeAttribute('tabindex')
  );
};

export const addAriaHiddenByClass = (
  className: string,
  animationTiming?: number = 500
) => {
  /** get elements by className and tranform the NodeList in Array */
  const elementsCollection = document.querySelectorAll(`.${className}`);
  const elementsArray = Array.from(elementsCollection);

  if (!elementsCollection || elementsArray.length === 0) {
    return undefined;
  }

  /** map on element to set animation and aria-hidden */
  const elementWithAttribute: any = elementsArray.map(element => {
    element.classList.add(FADE_OUT_ANIMATION);
    const timer = setTimeout(
      () => element.setAttribute('aria-hidden', 'true'),
      animationTiming
    );
    return () => clearTimeout(timer);
  });

  return elementWithAttribute;
};

export const removeAriaHiddenByClass = (
  className: string,
  animationTiming?: number = 500
) => {
  /** get elements by className and tranform the NodeList in Array */
  const elementsCollection = document.querySelectorAll(`.${className}`);
  const elementsArray = Array.from(elementsCollection);

  if (!elementsCollection || elementsArray.length === 0) {
    return undefined;
  }

  /** map on element to remove animation and aria-hidden */
  const elementWithoutAttribute: any = elementsArray.map(element => {
    element.removeAttribute('aria-hidden');
    element.classList.remove(FADE_OUT_ANIMATION);
    element.classList.add(FADE_IN_ANIMATION);
    const timer = setTimeout(
      () => element.classList.remove(FADE_IN_ANIMATION),
      animationTiming
    );
    return () => clearTimeout(timer);
  });

  return elementWithoutAttribute;
};
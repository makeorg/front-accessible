// @flow

export const addAriaHidden = (className: string) => {
  const elementsCollection = document.querySelectorAll(`.${className}`);
  const elementsArray = Array.from(elementsCollection);

  if (!elementsCollection || elementsArray.length === 0) {
    return undefined;
  }

  const elementWithAttribute: any = elementsArray.map(element =>
    element.setAttribute('aria-hidden', 'true')
  );

  return elementWithAttribute;
};

export const removeAriaHidden = (className: string) => {
  const elementsCollection = document.querySelectorAll(`.${className}`);
  const elementsArray = Array.from(elementsCollection);

  if (!elementsCollection || elementsArray.length === 0) {
    return undefined;
  }

  const elementWithoutAttribute: any = elementsArray.map(element =>
    element.removeAttribute('aria-hidden')
  );

  return elementWithoutAttribute;
};

// @flow

export const pxToRem = (value: string | number, base: number = 16) => {
  const px = parseInt(value, 10);
  const rem = parseFloat((px / parseInt(base, 10)).toPrecision(4));

  return `${rem}rem`;
};

export const pxToPercent = (childValue: number, parentValue: number) => {
  const percentValue = (childValue * 100) / parentValue;

  return `${percentValue}%`;
};

export const intToPx = (value: number) => {
  return `${value}px`;
};

export const getBarHeight = (value: number) => {
  const barHeight = (value * 30) / 100;

  return `${barHeight}px`;
};

export const scrollToTop = () => {
  const app = document.getElementById('app');
  if (!app) {
    return null;
  }
  return window.scrollTo(0, app.getBoundingClientRect().top);
};

export const getFullWidthDividedByItems = (count: number) => {
  return `${100 / count}%`;
};

export const lockBody = () => {
  const body = document.querySelector('body');

  if (!body) {
    return undefined;
  }

  return body.classList.add('locked');
};

export const unlockBody = () => {
  const body = document.querySelector('body');

  if (!body) {
    return undefined;
  }

  return body.classList.remove('locked');
};

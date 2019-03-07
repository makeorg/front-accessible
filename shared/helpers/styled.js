/* @flow */

export const pxToRem = (value: string | number, base: number = 16) => {
  const px = parseInt(value, 10);
  const rem = parseFloat((px / parseInt(base, 10)).toPrecision(4));

  return `${rem}rem`;
};

export const IntToPx = (value: number) => {
  return `${value}px`;
};

export const getBarHeight = (value: number) => {
  const barHeight = (value * 30) / 100;

  return `${barHeight}px`;
};

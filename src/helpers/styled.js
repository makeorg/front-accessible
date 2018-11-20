/* @flow */

export const pxToRem = (value: string, base: number = 16) => {
  const px = parseInt(value, 10);
  const rem = parseFloat((px / parseInt(base, 10)).toPrecision(4));

  return `${rem}rem`;
};

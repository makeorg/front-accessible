/* @flow */

export const getPosition = (index: number = 0, currentIndex: number = 0) => (
  (index - currentIndex) * 2
);

export const getZIndex = (index: number = 0, currentIndex: number = 0) => (
  50 - (index - currentIndex)
);

export const getScale = (initialIndex: number = 0, currentIndex: number = 0) => (
  1 - ((initialIndex - currentIndex) / 75)
);

export const gaugeProgress = (initialIndex: number = 0, totalIndex: number = 0) => {
  if (initialIndex === 0 || totalIndex === 0) {
    return 0;
  }
  return Math.floor((initialIndex / totalIndex) * 100);
};

export const gaugeRemain = (initialIndex: number = 0, totalIndex: number = 0) => {
  if (initialIndex === 0 || totalIndex === 0) {
    return 0;
  }
  return 100 - Math.floor((initialIndex / totalIndex) * 100);
};

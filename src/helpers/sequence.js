export const getPosition = (initialIndex, currentIndex = null) => {
  if (initialIndex === null || currentIndex === null) {
    return 0;
  }

  return (initialIndex - currentIndex) * 2;
};

export const getZIndex = (initialIndex, currentIndex = null) => {
  if (initialIndex === null || currentIndex === null) {
    return 0;
  }
  return 50 - (initialIndex - currentIndex);
};

export const getScale = (initialIndex, currentIndex = null) => {
  if (initialIndex === null || currentIndex === null) {
    return 0;
  }
  return 1 - ((initialIndex - currentIndex) / 75);
};

export const gaugeProgress = (initialIndex, totalIndex = null) => {
  if (initialIndex === null || totalIndex === null) {
    return 0;
  }
  return Math.floor((initialIndex / totalIndex) * 100);
};

export const gaugeRemain = (initialIndex, totalIndex = null) => {
  if (initialIndex === null || totalIndex === null) {
    return 0;
  }
  return 100 - Math.floor((initialIndex / totalIndex) * 100);
};

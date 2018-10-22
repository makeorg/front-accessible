export const getPosition = (index = null) => {
  if (index === null) {
    return 0;
  }

  return index * 2;
};

export const getZIndex = (index = null) => {
  if (index === null) {
    return 0;
  }
  return 50 - index;
};

export const getScale = (index = null) => {
  if (index === null) {
    return 0;
  }
  return 1 - (index / 75);
};

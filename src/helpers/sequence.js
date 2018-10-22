export const getIndex = (index, counter) => {
  if (index === null && counter == null) {
    return 0;
  }
  return index + counter;
};

export const getCardPosition = (index) => {
  if (index === null) {
    return 0;
  }
  return getIndex(index) * 2;
};

export const getZIndex = (index) => {
  if (index === null) {
    return 0;
  }
  return 50 - getIndex(index);
};

export const getScale = (index) => {
  if (index === null) {
    return 0;
  }
  return 1 - (getIndex(index) / 75);
};

export const doDecrementCounter = (prevState) => {
  if (prevState === null) {
    return false;
  }
  return {
    counter: prevState.counter - 1
  };
};

export const doIncrementCounter = (prevState) => {
  if (prevState === null) {
    return false;
  }
  return {
    counter: prevState.counter + 1
  };
};

/* @flow */

export const getRandomFromArray = (items: array) => {
  const randomValue = Math.floor(Math.random() * items.length);

  return items[randomValue];
};

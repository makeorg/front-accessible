// @flow

export const formatNumberByLocalisation = (
  count: number,
  country: string,
  language: string
) => {
  return count.toLocaleString(`${language}-${country}`);
};

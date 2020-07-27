// @flow
import { i18n } from 'Shared/i18n';

export const formatNumberByLocalisation = (
  count: number,
  country: string,
  language: string
) => {
  return count.toLocaleString(`${language}-${country}`);
};

export const formatMillionToText = (
  count: number,
  country: string,
  language: string
) => {
  let number = count;
  const oneMillion = 10 ** 6;

  if (number >= oneMillion) {
    number /= oneMillion;

    return `${number.toFixed(1)} ${i18n.t('common.million', {
      count: number,
    })}`;
  }

  return number.toLocaleString(`${language}-${country}`);
};

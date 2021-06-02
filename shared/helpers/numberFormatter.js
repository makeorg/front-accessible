// @flow
import { i18n } from 'Shared/i18n';

export const formatCountWithLanguage = (count: number, language: string) => {
  if (!count) {
    return null;
  }

  return count.toLocaleString(language);
};

export const formatMillionToText = (count: number, language: string) => {
  if (!count) {
    return null;
  }

  let number = count;
  const oneMillion = 10 ** 6;

  if (number >= oneMillion) {
    number /= oneMillion;

    return `${number.toFixed(1)} ${i18n.t('common.million', {
      count: number,
    })}`;
  }

  return number.toLocaleString(language);
};

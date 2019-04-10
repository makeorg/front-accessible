/* @flow */

let instance = null;

const localeMonths = {
  fr: [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ],
  en: [
    'january',
    'february',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

export const getDateOfBirthFromAge = (age: number = 0) => {
  if (!age) {
    return '';
  }

  const birthYear = new Date().getFullYear() - Number(age);

  return `${birthYear}-01-01`;
};

export const getAgeFromDateOfBrth = (dateOfBirth: string) => {
  if (!dateOfBirth) {
    return '';
  }

  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  if (birthDate.toString() === 'Invalid Date') {
    return '';
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const mounthDiff = today.getMonth() - birthDate.getMonth();
  if (
    mounthDiff < 0 ||
    (mounthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }

  return age;
};

export class DateHelperSingleton {
  _language: string;

  constructor() {
    if (!instance) {
      instance = this;
    }

    this._language = 'fr';
  }

  set language(language: string) {
    this._language = language;
  }

  get language() {
    return this._language;
  }

  creationDateFormat(date: string) {
    const objectDate = new Date(date);

    if (Number.isNaN(objectDate.getMonth())) {
      return null;
    }

    if (localeMonths[this._language] === undefined) {
      return null;
    }

    const localeMonth = localeMonths[this._language][objectDate.getMonth()];

    return `${objectDate.getDate()} ${localeMonth} ${objectDate.getFullYear()}`;
  }
}

export const DateHelper = new DateHelperSingleton();

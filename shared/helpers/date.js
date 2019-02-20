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
    'décembre'
  ]
};

export const getDateOfBirthFromAge = (age: number = 0) => {
  if (!age) {
    return null;
  }
  const birthYear = (new Date()).getFullYear() - Number(age);

  return `${birthYear}-01-01`;
};

export class DateHelperSingleton {
  _language: string

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

  proposalCreationDateFormat(date: string) {
    const objectDate = new Date(date);

    if (Number.isNaN(objectDate.getMonth())) {
      return null;
    }

    if (localeMonths[this._language] === undefined) {
      return null;
    }

    const localeMonth = localeMonths[this._language][objectDate.getMonth()];

    return `${objectDate.getDate()} ${localeMonth}`;
  }
}

export const DateHelper = new DateHelperSingleton();

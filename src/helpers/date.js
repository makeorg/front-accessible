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

export const getDateOfBirthFromAge = (age = null) => {
  if (!age || Number.isNaN(Number(age))) {
    return null;
  }
  const birthYear = (new Date()).getFullYear() - Number(age);

  return `${birthYear}-01-01`;
};

class DateHelper {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this._language = 'fr';
  }

  set language(language) {
    this._language = language;
  }

  get language() {
    return this._language;
  }

  proposalCreationDateFormat(date) {
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

export default new DateHelper();

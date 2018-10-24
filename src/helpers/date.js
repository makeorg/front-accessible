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

class DateHelper {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this._language = null;
  }

  set language(language) {
    this._language = language;
  }

  get language() {
    return this._language;
  }

  proposalCreationDateFormat(date) {
    const objectDate = new Date(date);
    const localeMonth = localeMonths[this._language][objectDate.getMonth()];

    return `${objectDate.getDate()} ${localeMonth}`;
  }
}

export default new DateHelper();

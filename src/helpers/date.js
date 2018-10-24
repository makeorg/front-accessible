import moment from 'moment';

let instance = null;

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
    return this.formatDate(date, 'D MMMM');
  }

  formatDate(date, format) {
    const momentDate = moment(date, 'YYYY-MM-DDTHH:mm:ssZ');

    return momentDate.locale(this._language).format(format);
  }
}

export default new DateHelper();

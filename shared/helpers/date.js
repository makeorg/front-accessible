/* @flow */
import moment from 'moment';

let instance = null;

export const getDateOfBirthFromAge = (age: string = '') => {
  if (!age) {
    return null;
  }

  const birthYear = new Date().getFullYear() - Number(age);

  return `${birthYear}-01-01`;
};

export const getAgeFromDateOfBirth = (dateOfBirth: string) => {
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

  return age.toString();
};

type ConsultationDates = {
  startDate: ?string | null,
  endDate: ?string | null,
};

export const isInProgress = (dates: ConsultationDates) => {
  if (!dates.endDate) {
    return true;
  }
  const end = new Date(dates.endDate);
  const today = new Date();

  if (!dates.startDate) {
    return today < end;
  }
  const start = new Date(dates.startDate);

  return start <= today && today < end;
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

  creationDateFormat(date: ?string | null) {
    if (!date) {
      return null;
    }
    const objectDate = new Date(date);
    if (Number.isNaN(objectDate.getMonth())) {
      return null;
    }

    moment.locale(this._language);

    return moment(objectDate).format('LL');
  }
}

export const DateHelper = new DateHelperSingleton();

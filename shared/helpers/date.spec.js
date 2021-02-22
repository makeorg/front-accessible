/* @flow */

import MockDate from 'mockdate';
import {
  DateHelper,
  getDateOfBirthFromAge,
  getAgeFromDateOfBirth,
  isInProgress,
  getDate,
  orderByEndDate,
  isCurrentStep,
} from './date';

describe('Date Helper', () => {
  describe('getDateOfBirthFromAge', () => {
    it('getDateOfBirthFromAge with valid integer age', () => {
      MockDate.set('1/1/2019');
      const dateOfBirth = getDateOfBirthFromAge(32);
      expect(dateOfBirth).toBe('1987-01-01');
      MockDate.reset();
    });

    it('getDateOfBirthFromAge with valid integer age and changing current date', () => {
      MockDate.set('1/1/2018');
      const dateOfBirth = getDateOfBirthFromAge(35);
      expect(dateOfBirth).toBe('1983-01-01');
      MockDate.reset();
    });

    it('getDateOfBirthFromAge with valid string age', () => {
      MockDate.set('1/1/2019');
      const dateOfBirth = getDateOfBirthFromAge('32');
      expect(dateOfBirth).toBe('1987-01-01');
      MockDate.reset();
    });

    it('getDateOfBirthFromAge without age', () => {
      const dateOfBirth = getDateOfBirthFromAge();
      expect(dateOfBirth).toBe(null);
    });
  });

  describe('getAgeFromDateOfBirth', () => {
    it('getDateOfBirthFromAge with invalid date', () => {
      MockDate.set('1/1/2019');
      const age = getAgeFromDateOfBirth('fooo-bar');
      expect(age).toBe('');
    });

    it('getDateOfBirthFromAge with empty date', () => {
      MockDate.set('1/1/2019');
      const age = getAgeFromDateOfBirth();
      expect(age).toBe('');
    });

    it('getDateOfBirthFromAge with valid date', () => {
      MockDate.set('1/1/2019');
      const age = getAgeFromDateOfBirth('1986-09-29');
      expect(age).toBe('32');
    });

    it('getDateOfBirthFromAge with valid date and mounth in future', () => {
      MockDate.set('1/10/2019');
      const age = getAgeFromDateOfBirth('1986-09-29');
      expect(age).toBe('32');
    });
  });

  describe('creationDateFormat', () => {
    it('creationDateFormat with valid date', () => {
      DateHelper.language = 'fr';
      expect(DateHelper.creationDateFormat('2018-10-25T12:45:25.752Z')).toBe(
        '25 octobre 2018'
      );
    });

    it('creationDateFormat with valid date and en locale', () => {
      DateHelper.language = 'en';
      expect(DateHelper.creationDateFormat('2018-10-24T12:45:25.752Z')).toBe(
        'October 24, 2018'
      );
    });

    it('creationDateFormat with invalid date', () => {
      expect(DateHelper.creationDateFormat('foo')).toBeNull();
    });

    it('getLanguage', () => {
      DateHelper.language = 'de';
      const { language } = DateHelper;
      expect(language).toBe('de');
    });
  });

  describe('localizedllDate', () => {
    it('localizedllDate with valid date', () => {
      DateHelper.language = 'fr';
      expect(DateHelper.localizedllDate('2018-10-25T12:45:25.752Z')).toBe(
        '25 oct. 2018'
      );
    });

    it('localizedllDate with valid date and en locale', () => {
      DateHelper.language = 'en';
      expect(DateHelper.localizedllDate('2018-10-24T12:45:25.752Z')).toBe(
        'Oct 24, 2018'
      );
    });

    it('localizedllDate with invalid date', () => {
      expect(DateHelper.localizedllDate('foo')).toBeNull();
    });
  });
  describe('localizedMonthYear', () => {
    it('localizedMonthYear with valid date', () => {
      DateHelper.language = 'fr';
      expect(DateHelper.localizedMonthYear('2018-10-25T12:45:25.752Z')).toBe(
        'octobre 2018'
      );
    });

    it('localizedMonthYear with valid date and en locale', () => {
      DateHelper.language = 'en';
      expect(DateHelper.localizedMonthYear('2018-10-24T12:45:25.752Z')).toBe(
        'October 2018'
      );
    });

    it('localizedMonthYear with invalid date', () => {
      expect(DateHelper.localizedMonthYear('foo')).toBeNull();
    });
  });
  describe('localizedLDate', () => {
    it('localizedLDate with valid date', () => {
      DateHelper.language = 'fr';
      expect(DateHelper.localizedLDate('2018-10-25T12:45:25.752Z')).toBe(
        '25/10/2018'
      );
    });

    it('localizedLDate with valid date and en locale', () => {
      DateHelper.language = 'en';
      expect(DateHelper.localizedLDate('2018-10-24T12:45:25.752Z')).toBe(
        '10/24/2018'
      );
    });

    it('localizedLDate with invalid date', () => {
      expect(DateHelper.localizedLDate('foo')).toBeNull();
    });
  });

  describe('getRemainingDays', () => {
    it('getRemainingDays with valid date', () => {
      jest
        .spyOn(global, 'Date')
        .mockImplementationOnce(() => new Date('2019-10-15T12:45:25.752Z'));

      expect(DateHelper.getRemainingDays('2019-10-25T12:45:25.752Z')).toBe(10);
    });

    it('getRemainingDays with invalid date', () => {
      expect(DateHelper.getRemainingDays('foo')).toBeNull();
    });
  });

  describe('isInProgress', () => {
    const startDate = '1980-01-01';
    let endDate = '2075-01-01';

    it('isInProgress with startDate is null', () => {
      expect(isInProgress({ startDate: null, endDate })).toBe(true);
    });

    it('isInProgress with endDate is null', () => {
      expect(isInProgress({ startDate, endDate: null })).toBe(true);
    });

    it('consultation is open', () => {
      expect(isInProgress({ startDate, endDate })).toBe(true);
    });

    it('consultation is closed', () => {
      endDate = '1980-01-02';
      expect(isInProgress({ startDate, endDate })).toBe(false);
    });
  });

  describe('isCurrentStep', () => {
    const question = { startDate: '2021-01-15', endDate: '2021-05-15' };
    const result = { date: '2021-02-15' };
    const workshop = { date: '2021-03-15' };
    const action = { date: '2021-04-15' };

    it('marks first step consultation has current', () => {
      MockDate.set('2021-02-10');
      expect(isCurrentStep(question, result)).toBe(true);
      expect(isCurrentStep(result, workshop)).toBe(false);
      expect(isCurrentStep(workshop, action)).toBe(false);
      expect(isCurrentStep(action, question)).toBe(false);
    });

    it('marks second step result has current', () => {
      MockDate.set('2021-03-10');
      expect(isCurrentStep(result, workshop)).toBe(true);
      expect(isCurrentStep(question, result)).toBe(false);
      expect(isCurrentStep(workshop, action)).toBe(false);
      expect(isCurrentStep(action, question)).toBe(false);
    });

    it('marks third step workshop has current', () => {
      MockDate.set('2021-04-10');
      expect(isCurrentStep(workshop, action)).toBe(true);
      expect(isCurrentStep(question, result)).toBe(false);
      expect(isCurrentStep(result, workshop)).toBe(false);
      expect(isCurrentStep(action, question)).toBe(false);
    });

    it('marks last step action has current', () => {
      MockDate.set('2021-05-10');
      expect(isCurrentStep(action, question)).toBe(true);
      expect(isCurrentStep(question, result)).toBe(false);
      expect(isCurrentStep(result, workshop)).toBe(false);
      expect(isCurrentStep(workshop, action)).toBe(false);
    });

    it('returns false if result does not exists for second step', () => {
      const noResult = {};
      MockDate.set('2021-03-10');
      expect(isCurrentStep(noResult, workshop)).toBe(false);
    });

    it('returns false if result does not exists for first step', () => {
      const noResult = {};
      MockDate.set('2021-03-10');
      expect(isCurrentStep(question, noResult)).toBe(false);
    });

    it('returns false if workshop does not exists for third step', () => {
      const noWorkshop = {};
      MockDate.set('2021-04-10');
      expect(isCurrentStep(noWorkshop, action)).toBe(false);
    });

    it('returns false if workshop does not exists for second step', () => {
      const noWorkshop = {};
      MockDate.set('2021-04-10');
      expect(isCurrentStep(result, noWorkshop)).toBe(false);
    });

    it('returns false if action does not exists for last step', () => {
      const noAction = {};
      MockDate.set('2021-05-10');
      expect(isCurrentStep(noAction, question)).toBe(false);
    });

    it('returns false if action not exists for third step', () => {
      const noAction = {};
      MockDate.set('2021-04-10');
      expect(isCurrentStep(workshop, noAction)).toBe(false);
    });
  });
  describe('getDate', () => {
    const nullDate = null;
    const dateString = '1984-02-15';
    const date = new Date(dateString);

    it('receive an null date', () => {
      expect(getDate(nullDate)).toBe(null);
    });

    it('receive a string date', () => {
      expect(getDate(dateString)).toMatchObject(date);
    });
  });

  describe('orderByEndDate', () => {
    const questionA = { endDate: '1980-01-02' };
    const questionB = { endDate: '2075-01-01' };
    const questionANullDate = { endDate: null };
    const questionBNullDate = { endDate: null };

    it('receive null end date for both questions', () => {
      expect(orderByEndDate(questionANullDate, questionBNullDate)).toBe(0);
    });

    it('receive null end date for questionA', () => {
      expect(orderByEndDate(questionANullDate, questionB)).toBe(-1);
    });

    it('receive null end date for questionB', () => {
      expect(orderByEndDate(questionA, questionBNullDate)).toBe(1);
    });

    it('receive endDates for questionA & questionB', () => {
      const dateA = getDate(questionA.endDate);
      const dateB = getDate(questionB.endDate);

      expect(orderByEndDate(questionA, questionB)).toBe(dateB - dateA);
    });
  });
});

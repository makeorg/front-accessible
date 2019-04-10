/* @flow */

import MockDate from 'mockdate';
import {
  DateHelper,
  getDateOfBirthFromAge,
  getAgeFromDateOfBrth,
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
      expect(dateOfBirth).toBe('');
    });
  });

  describe('getAgeFromDateOfBirth', () => {
    it('getDateOfBirthFromAge with invalid date', () => {
      MockDate.set('1/1/2019');
      const age = getAgeFromDateOfBrth('fooo-bar');
      expect(age).toBe('');
    });

    it('getDateOfBirthFromAge with empty date', () => {
      MockDate.set('1/1/2019');
      const age = getAgeFromDateOfBrth();
      expect(age).toBe('');
    });

    it('getDateOfBirthFromAge with valid date', () => {
      MockDate.set('1/1/2019');
      const age = getAgeFromDateOfBrth('1986-09-29');
      expect(age).toBe(32);
    });

    it('getDateOfBirthFromAge with valid date and mounth in future', () => {
      MockDate.set('1/10/2019');
      const age = getAgeFromDateOfBrth('1986-09-29');
      expect(age).toBe(32);
    });
  });

  describe('creationDateFormat', () => {
    it('creationDateFormat with valid date', () => {
      expect(DateHelper.creationDateFormat('2018-10-24T12:45:25.752Z')).toBe(
        '24 octobre 2018'
      );
    });

    it('creationDateFormat with invalid date', () => {
      expect(DateHelper.creationDateFormat('foo')).toBeNull();
    });

    it('creationDateFormat with invalid language', () => {
      DateHelper.language = 'de';
      expect(
        DateHelper.creationDateFormat('2018-10-24T12:45:25.752Z')
      ).toBeNull();
    });

    it('getLanguage', () => {
      const { language } = DateHelper;
      expect(language).toBe('de');
    });
  });
});

/* @flow */

import DateHelper, { getDateOfBirthFromAge } from './date';
import MockDate from 'mockdate';

describe('Date Helper', () => {
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
    expect(dateOfBirth).toBeNull();
  });

  it('proposalCreationDateFormat with valid date', () => {
    expect(DateHelper.proposalCreationDateFormat('2018-10-24T12:45:25.752Z')).toBe('24 octobre');
  });

  it('proposalCreationDateFormat with invalid date', () => {
    expect(DateHelper.proposalCreationDateFormat('foo')).toBeNull();
  });

  it('proposalCreationDateFormat with invalid language', () => {
    DateHelper.language = 'de';
    expect(DateHelper.proposalCreationDateFormat('2018-10-24T12:45:25.752Z')).toBeNull();
  });

  it('getLanguage', () => {
    const language = DateHelper.language;
    expect(language).toBe('de');
  });
});

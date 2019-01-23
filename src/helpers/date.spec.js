/* @flow */

import DateHelper, { getDateOfBirthFromAge } from './date';

describe('Date Helper', () => {
  it('getDateOfBirthFromAge with valid integer age', () => {
    const clock = sinon.useFakeTimers(new Date(2019,1,1).getTime());
    const dateOfBirth = getDateOfBirthFromAge(32);
    expect(dateOfBirth).toBe('1987-01-01');
    clock.restore();
  });

  it('getDateOfBirthFromAge with valid integer age and changing current date', () => {
    const clock = sinon.useFakeTimers(new Date(2018,1,1).getTime());
    const dateOfBirth = getDateOfBirthFromAge(35);
    expect(dateOfBirth).toBe('1983-01-01');
    clock.restore();
  });

  it('getDateOfBirthFromAge with valid string age', () => {
    const clock = sinon.useFakeTimers(new Date(2019,1,1).getTime());
    const dateOfBirth = getDateOfBirthFromAge('32');
    expect(dateOfBirth).toBe('1987-01-01');
    clock.restore();
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

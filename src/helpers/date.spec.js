/* @flow */

import DateHelper, { getDateOfBirthFromAge } from './date';

describe('Date Helper', () => {
  it('getDateOfBirthFromAge with valid integer age', () => {
    const dateOfBirth = getDateOfBirthFromAge(32);
    expect(dateOfBirth).to.equal('1986-01-01');
  });

  it('getDateOfBirthFromAge with valid string age', () => {
    const dateOfBirth = getDateOfBirthFromAge('32');
    expect(dateOfBirth).to.equal('1986-01-01');
  });

  it('getDateOfBirthFromAge without age', () => {
    const dateOfBirth = getDateOfBirthFromAge();
    expect(dateOfBirth).to.equal(null);
  });

  it('proposalCreationDateFormat with valid date', () => {
    expect(DateHelper.proposalCreationDateFormat('2018-10-24T12:45:25.752Z')).to.equal('24 octobre');
  });

  it('proposalCreationDateFormat with invalid date', () => {
    expect(DateHelper.proposalCreationDateFormat('foo')).to.equal(null);
  });

  it('proposalCreationDateFormat with invalid language', () => {
    DateHelper.language = 'de';
    expect(DateHelper.proposalCreationDateFormat('2018-10-24T12:45:25.752Z')).to.equal(null);
  });

  it('getLanguage', () => {
    const language = DateHelper.language;
    expect(language).to.equal('de');
  });
});

// @flow
import { type TypeErrorObject } from 'Shared/types/api';
import { defaultApiError, emptyError } from 'Shared/errors/Messages';
import {
  getFieldError,
  getErrorMessages,
  setNullToEmptyString,
  setEmptyStringToNull,
} from './form';

describe('getFieldError', () => {
  const errors: TypeErrorObject[] = [
    {
      field: 'foo',
      key: 'fooKey',
      message: 'fooMessage',
    },
    {
      field: 'bar',
      key: 'barKey',
      message: 'barMessage',
    },
    {
      field: 'baz',
      key: 'bazKey',
      message: 'bazMessage',
    },
  ];
  it('getFieldError with right key and empty errors', () => {
    expect(getFieldError('foo', [defaultApiError])).toEqual(emptyError);
  });

  it('getFieldError with bad field key and filled errors', () => {
    expect(getFieldError('badFieldKey', errors)).toEqual(emptyError);
  });

  it('getFieldError with right key and filled errors', () => {
    errors.map((error, index) => {
      return expect(getFieldError(error.field, errors)).toEqual(errors[index]);
    });
  });
});

describe('getErrorMessages', () => {
  const internalErrors: TypeErrorObject[] = [
    {
      field: 'foo',
      key: 'fooKey',
      message: 'internalFooMessage',
    },
    {
      field: 'bar',
      key: 'barKey',
      message: 'internalBarMessage',
    },
    {
      field: 'baz',
      key: 'bazKey',
      message: 'internalBazMessage',
    },
  ];

  const serviceErrors: TypeErrorObject[] = [
    {
      field: 'foo',
      key: 'fooKey',
      message: 'apiFooMessage',
    },
    {
      field: 'bar',
      key: 'barKey',
      message: 'apiBarMessage',
    },
    {
      field: 'baz',
      key: 'bazKey',
      message: 'apiBazMessage',
    },
  ];

  const apiObjectError: TypeErrorObject = {
    field: 'foo',
    key: 'fooKey',
    message: 'fooMessage',
  };

  it('getMessage with an array of Errors returned from Api', () => {
    const errors = getErrorMessages(internalErrors, serviceErrors);
    expect(errors).toEqual(internalErrors);
  });
  it('getMessage with an single object error returned from Api', () => {
    const errors = getErrorMessages(internalErrors, apiObjectError);
    expect(errors).toEqual([defaultApiError]);
  });
});

describe('setEmptyStringToNull', () => {
  it('empty string should return null', () => {
    expect(setEmptyStringToNull('')).toEqual(null);
  });
  it('value should be returned', () => {
    expect(setEmptyStringToNull('foo')).toEqual('foo');
  });
});

describe('setNullToEmptyString', () => {
  it('null should return empty string', () => {
    expect(setNullToEmptyString(null)).toEqual('');
  });
  it('value should be returned', () => {
    expect(setNullToEmptyString('foo')).toEqual('foo');
  });
});

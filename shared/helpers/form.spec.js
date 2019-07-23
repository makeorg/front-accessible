// @flow
import { type TypeErrorObject } from 'Shared/types/api';
import { getFieldError } from './form';

describe('getFieldError', () => {
  const errors: TypeErrorObject[] = [
    {
      field: 'foo',
      message: 'fooMessage',
    },
    {
      field: 'bar',
      message: 'barMessage',
    },
    {
      field: 'baz',
      message: 'bazMessage',
    },
  ];

  const defaultError: TypeErrorObject = {
    field: '',
    message: '',
  };

  it('getFieldError with right key and empty errors', () => {
    expect(getFieldError('foo', [defaultError])).toEqual(defaultError);
  });

  it('getFieldError with bad field key and filled errors', () => {
    expect(getFieldError('badFieldKey', errors)).toEqual(defaultError);
  });

  it('getFieldError with right key and filled errors', () => {
    expect(getFieldError('bar', errors)).toEqual(errors[1]);
  });
});

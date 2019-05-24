import { getLocationContext } from './getLocationContext';

describe('getLocationContext', () => {
  
  it('get location context /', () => {
    expect(getLocationContext('/')).toBe('homepage');
  });

  it('get location context ROUTE_CONSULTATION', () => {
    expect(
      getLocationContext('/FR-fr/consultation/foo/consultation', 'abcd')
    ).toBe('page-operation abcd');
  });

  it('get location context ROUTE_SEQUENCE', () => {
    expect(
      getLocationContext('/FR-fr/consultation/foo/selection', 'abcd')
    ).toBe('sequence abcd');
  });

  it('get location context ROUTE_PROPOSAL', () => {
    expect(
      getLocationContext(
        '/FR-fr/consultation/foo/proposal/bar/2',
        undefined,
        'abcd'
      )
    ).toBe('proposal-page abcd');
  });
});

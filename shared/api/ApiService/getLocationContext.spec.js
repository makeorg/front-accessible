import { getLocationContext } from './getLocationContext';

describe('getLocationContext', () => {
  it('get location context default', () => {
    expect(getLocationContext('/FR-fr')).toBe('unknown_location /FR-fr');
  });

  it('get location context ROUTE_CONSULTATION', () => {
    expect(
      getLocationContext('/FR-fr/consultation/foo/consultation', 'abcd')
    ).toBe('question_page abcd');
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
    ).toBe('proposal_page abcd');
  });
});

// @flow
import { getCurrentContainer } from 'Shared/helpers/consultation';
import {
  RESULTS_TOP_IDEAS,
  RESULTS_CONTROVERSIALS,
  RESULTS_CARTOGRAPHY,
  RESULTS_PARTICIPATION,
} from 'Shared/constants/ids';

describe('Current container helper', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('returns top idea container', () => {
    const currentContainer = getCurrentContainer(RESULTS_TOP_IDEAS);
    expect(currentContainer).toBe('top-ideas');
  });

  it('returns controversials container', () => {
    const currentContainer = getCurrentContainer(RESULTS_CONTROVERSIALS);
    expect(currentContainer).toBe('proposals-controversials');
  });

  it('returns cartography container', () => {
    const currentContainer = getCurrentContainer(RESULTS_CARTOGRAPHY);
    expect(currentContainer).toBe('cartography');
  });

  it('returns participants container', () => {
    const currentContainer = getCurrentContainer(RESULTS_PARTICIPATION);
    expect(currentContainer).toBe('participants-chart');
  });

  it('returns null if no id', () => {
    const currentContainer = getCurrentContainer(undefined);
    expect(currentContainer).toBe(null);
  });
});

import { getHomepageRatio } from 'Client/features/consultation/Browse/Item';

describe('getHomepageRatio', () => {
  it('return a width value for a 4 items layout', () => {
    expect(getHomepageRatio(248, 4)).toEqual(255);
  });
  it('return a width value for a 3 items layout', () => {
    expect(getHomepageRatio(248, 3)).toEqual(353);
  });
  it('return a width value for other layouts', () => {
    expect(getHomepageRatio(248, 1)).toEqual(550);
  });
});

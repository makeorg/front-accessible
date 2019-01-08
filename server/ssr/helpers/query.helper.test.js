import { queryParamIsDisable, disableExtraSlidesByQuery } from './query.helper';

describe('query helper', () => {
  describe('queryParamIsDisable', () => {
    it('introCard query must be enabled by default', () => {
      // given
      const query = {};
      // when
      const isDisable = queryParamIsDisable(query, 'introCard');
      // then
      expect(isDisable).to.equal(false);
    });

    it('introCard query must be disabled', () => {
      // given
      const query = { introCard: 'false' };
      // when
      const isDisable = queryParamIsDisable(query, 'introCard');
      // then
      expect(isDisable).to.equal(true);
    });

    it('introCard query must be enabled', () => {
      // given
      const query = { introCard: 'true' };
      // when
      const isDisable = queryParamIsDisable(query, 'introCard');
      // then
      expect(isDisable).to.equal(false);
    });
  });

  describe('disableExtraSlidesByQuery', () => {
    let extraSlidesConfig;
    beforeEach(() => {
      extraSlidesConfig = { introCard: { param: 'unactive' }, finalCard: { param: 'active' } };
    });
    it('introCard query must be enabled by default', () => {
      // given
      const query = {};
      // when
      const extraSlides = disableExtraSlidesByQuery(extraSlidesConfig, query);
      // then
      expect(extraSlides).to.deep.equal(extraSlidesConfig);
    });

    it('introCard query must be enabled', () => {
      // given
      const query = { introCard: 'true' };
      // when
      const extraSlides = disableExtraSlidesByQuery(extraSlidesConfig, query);
      // then
      expect(extraSlides).to.deep.equal(extraSlidesConfig);
    });

    it('introCard query must be disabled', () => {
      // given
      const query = { introCard: 'false' };
      // when
      const extraSlides = disableExtraSlidesByQuery(extraSlidesConfig, query);
      // then
      expect(extraSlides).to.deep.equal({ finalCard: { param: 'active' } });
    });
  });
});

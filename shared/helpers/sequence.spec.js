/* @flow */
import {
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
  CARD_TYPE_PROPOSAL,
} from 'Shared/constants/card';
import * as helpers from './sequence';

describe('Sequence Helper', () => {
  describe('test getPosition', () => {
    it('without currentIndex', () => {
      const position = helpers.getPosition();
      expect(position).toBeCloseTo(0, 0.001);
    });

    it('without Index and with currentIndex', () => {
      const position = helpers.getPosition(5);
      expect(position).toBeCloseTo(10, 0.001);
    });

    it('with Index & currentIndex', () => {
      const position = helpers.getPosition(5, 1);
      expect(position).toBeCloseTo(8, 0.001);
    });
  });

  describe('test getZIndex', () => {
    it('without Index & currentIndex', () => {
      const zindex = helpers.getZIndex();
      expect(zindex).toBeCloseTo(50, 0.001);
    });

    it('without Index and with currentIndex', () => {
      const zindex = helpers.getZIndex(10);
      expect(zindex).toBeCloseTo(40, 0.001);
    });

    it('with Index & currentIndex', () => {
      const zindex = helpers.getZIndex(7, 1);
      expect(zindex).toBeCloseTo(44.0, 0.001);
    });
  });
  describe('test getScale', () => {
    it('getScale without Index & currentIndex', () => {
      const scale = helpers.getScale();
      expect(scale).toBeCloseTo(1, 0.001);
    });

    it('getScale without Index and with currentIndex', () => {
      const scale = helpers.getScale(10);
      expect(scale).toBeCloseTo(0.86, 0.01);
    });

    it('getScale with Index & currentIndex', () => {
      const scale = helpers.getScale(400, 100);
      expect(scale).toBe(-3);
    });
  });

  describe('test gaugeProgress', () => {
    it('gaugeProgress without Index & currentIndex', () => {
      const scale = helpers.gaugeProgress();
      expect(scale).toBe(0);
    });

    it('gaugeProgress without Index or currentIndex', () => {
      const scale = helpers.gaugeProgress(10);
      expect(scale).toBe(0);
    });

    it('gaugeProgress with Index & currentIndex', () => {
      const scale = helpers.gaugeProgress(3, 12);
      expect(scale).toBe(25);
    });
  });

  describe('test gaugeRemain', () => {
    it('without initialIndex & without totalIndex', () => {
      const scale = helpers.gaugeRemain();
      expect(scale).toBe(0);
    });

    it('gaugeRemain with initialIndex and without totalIndex', () => {
      const scale = helpers.gaugeRemain(10);
      expect(scale).toBe(0);
    });

    it('gaugeRemain with initialIndex and totalIndex', () => {
      const scale = helpers.gaugeRemain(3, 12);
      expect(scale).toBe(75);
    });
  });
  describe('test buildCards', () => {
    const proposals = [];

    it('dont contain intro card', () => {
      const extraSlidesConfig = {
        introCard: { enabled: false },
      };
      const cards = helpers.buildCards(proposals, extraSlidesConfig);

      expect(cards.length).toBe(0);
    });

    it('contain intro card', () => {
      const extraSlidesConfig = {
        introCard: { enabled: true },
      };
      const cards = helpers.buildCards(proposals, extraSlidesConfig);

      expect(cards.length).toBe(1);
      expect(cards[0]).toEqual({
        cardOffset: 0,
        type: CARD_TYPE_EXTRASLIDE_INTRO,
        configuration: extraSlidesConfig.introCard,
      });
    });

    it('dont contain push proposal card', () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: false },
      };
      const cards = helpers.buildCards(proposals, extraSlidesConfig);

      expect(cards.length).toBe(0);
    });
  });
});

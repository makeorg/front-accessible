/* @flow */
import {
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_SPECIAL_FINAL_CARD,
} from 'Shared/constants/card';
import { ZONE_CONTROVERSY, ZONE_POPULAR } from 'Shared/constants/sequence';
import * as helpers from './sequence';

describe('Sequence Helper', () => {
  describe('test buildCards', () => {
    const proposals = [];

    it("doesn't contain intro card in API conf and in params", () => {
      const extraSlidesConfig = {
        introCard: { enabled: false },
      };
      const introCardParam = false;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        false,
        false,
        null,
        introCardParam
      );
      expect(cards.length).toBe(1);
      expect(cards).toEqual([
        {
          index: 0,
          offset: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain intro card in API conf but false in params', () => {
      const extraSlidesConfig = {
        introCard: { enabled: true },
      };
      const introCardParam = false;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        false,
        false,
        null,
        introCardParam
      );
      expect(cards.length).toBe(1);
      expect(cards).toEqual([
        {
          index: 0,
          offset: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it("doesn't contain intro card in API conf but true in params", () => {
      const extraSlidesConfig = {
        introCard: { enabled: false },
      };
      const introCardParam = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        false,
        false,
        null,
        introCardParam
      );
      expect(cards.length).toBe(1);
      expect(cards).toEqual([
        {
          index: 0,
          offset: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain intro card in API conf and in params', () => {
      const extraSlidesConfig = {
        introCard: { enabled: true },
      };
      const introCardParam = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        false,
        false,
        null,
        introCardParam
      );

      expect(cards.length).toBe(2);
      expect(cards).toEqual([
        {
          index: 0,
          offset: 0,
          type: CARD_TYPE_EXTRASLIDE_INTRO,
          configuration: extraSlidesConfig.introCard,
        },
        {
          index: 1,
          offset: 0,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it("doesn't contain push proposal card in API conf and in params", () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: false },
      };
      const pushProposalParam = false;
      const hasProposed = false;
      const canPropose = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        null,
        false,
        pushProposalParam
      );
      expect(cards.length).toBe(1);
      expect(cards).toEqual([
        {
          index: 0,
          offset: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain push proposal in API conf but false in params', () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: true },
      };
      const pushProposalParam = false;
      const hasProposed = false;
      const canPropose = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        null,
        false,
        pushProposalParam
      );
      expect(cards.length).toBe(1);
      expect(cards).toEqual([
        {
          index: 0,
          offset: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it("doesn't contain push proposal in API conf but true in params", () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: false },
      };
      const pushProposalParam = true;
      const hasProposed = false;
      const canPropose = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        null,
        false,
        pushProposalParam
      );
      expect(cards.length).toBe(1);
      expect(cards).toEqual([
        {
          index: 0,
          offset: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain push proposal in API conf and in params', () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: true },
      };
      const pushProposalParam = true;
      const hasProposed = false;
      const canPropose = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        null,
        false,
        pushProposalParam
      );

      expect(cards.length).toBe(2);
      expect(cards).toEqual([
        {
          index: 0,
          offset: 1,
          type: CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
          configuration: extraSlidesConfig.pushProposalCard,
        },
        {
          index: 1,
          offset: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain push proposal but has already proposed', () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: true },
      };
      const pushProposalParam = true;
      const hasProposed = true;
      const canPropose = true;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        null,
        false,
        pushProposalParam
      );

      expect(cards.length).toBe(1);
      expect(cards).toEqual([
        {
          index: 0,
          offset: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });

    it('contain push proposal but canPropose is disabled', () => {
      const extraSlidesConfig = {
        pushProposalCard: { enabled: true },
      };
      const pushProposalParam = true;
      const hasProposed = false;
      const canPropose = false;
      const cards = helpers.buildCards(
        proposals,
        extraSlidesConfig,
        hasProposed,
        canPropose,
        null,
        false,
        pushProposalParam
      );

      expect(cards.length).toBe(1);
      expect(cards).toEqual([
        {
          index: 0,
          offset: 1,
          type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
          configuration: undefined,
        },
      ]);
    });
  });

  describe('get special title', () => {
    it('controversy zone', () => {
      const specialZone = helpers.getSpecialTitle(ZONE_CONTROVERSY);
      expect(specialZone).toEqual(true);
    });

    it('consensus zone', () => {
      const specialZone = helpers.getSpecialTitle(ZONE_POPULAR);
      expect(specialZone).toEqual(true);
    });

    it('unknown zone', () => {
      const specialZone = helpers.getSpecialTitle('foo');
      expect(specialZone).toEqual(false);
    });
  });

  describe('get sequence title by zone', () => {
    it('title from controversy zone', () => {
      const specialTitle = helpers.getSequenceTitleByZone(ZONE_CONTROVERSY);
      expect(specialTitle).toEqual('sequence_zone.controversial_title');
    });

    it('title from consensus zone', () => {
      const specialTitle = helpers.getSequenceTitleByZone(ZONE_POPULAR);
      expect(specialTitle).toEqual('sequence_zone.popular_title');
    });

    it('title from unknown zone', () => {
      const specialTitle = helpers.getSequenceTitleByZone('foo');
      expect(specialTitle).toEqual(null);
    });
  });

  describe('get finard card by zone', () => {
    it('card from controversy zone', () => {
      const finalCard = helpers.getFinalCardByZone(ZONE_CONTROVERSY);
      expect(finalCard).toEqual(CARD_TYPE_EXTRASLIDE_SPECIAL_FINAL_CARD);
    });

    it('card from consensus zone', () => {
      const finalCard = helpers.getFinalCardByZone(ZONE_POPULAR);
      expect(finalCard).toEqual(CARD_TYPE_EXTRASLIDE_SPECIAL_FINAL_CARD);
    });

    it('card from unknown zone', () => {
      const finalCard = helpers.getFinalCardByZone('foo');
      expect(finalCard).toEqual(CARD_TYPE_EXTRASLIDE_FINAL_CARD);
    });
  });
});

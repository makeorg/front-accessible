/* @flow */

import { orderPartnersByWeight } from './question';

describe('Date Helper', () => {
  describe('orderPartnersByWeight', () => {
    const partner1 = { weight: 0 };
    const partner2 = { weight: 5 };
    const partner1NoWeight = { weight: null };
    const partner2NoWeight = { weight: null };

    it('no weight for both questions', () => {
      expect(orderPartnersByWeight(partner1NoWeight, partner2NoWeight)).toBe(0);
    });

    it('no weight for partner1', () => {
      expect(orderPartnersByWeight(partner1NoWeight, partner2)).toBe(-1);
    });

    it('no weight for partner2', () => {
      expect(orderPartnersByWeight(partner1, partner2NoWeight)).toBe(1);
    });

    it('receive weights for partner1 & partner2', () => {
      expect(orderPartnersByWeight(partner1, partner2)).toBe(0);
    });
  });
});

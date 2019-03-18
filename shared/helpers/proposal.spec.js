/* @flow */
import {
  getBaitText,
  PROPOSALS_LISTING_LIMIT,
} from 'Shared/constants/proposal';
import { ProposalService } from 'Shared/api/ProposalService';
import { Logger } from 'Shared/services/Logger';
import * as ProposalHelper from './proposal';

jest.mock('Shared/api/ProposalService');
jest.mock('Shared/services/Logger');
jest.mock('Shared/constants/proposal', () => ({
  getBaitText: () => 'il faut',
  MIN_PROPOSAL_LENGTH: 12,
  MAX_PROPOSAL_LENGTH: 140,
  PROPOSALS_LISTING_LIMIT: 20,
}));

describe('Proposal Helper', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getProposalLength function', () => {
    const validProposalContent = 'foobar';
    it('getProposalLength with content', () => {
      const proposalLength = ProposalHelper.getProposalLength(
        validProposalContent
      );
      expect(proposalLength).toBe(13);
    });

    it('getProposalLength with empty content', () => {
      const proposalLength = ProposalHelper.getProposalLength();
      expect(proposalLength).toBe(getBaitText().length);
    });
  });

  describe('getIsProposalValidLength function', () => {
    it('getIsProposalValidLength with content with valid length', () => {
      const isProposalValidLength = ProposalHelper.getIsProposalValidLength(15);
      expect(isProposalValidLength).toBe(true);
    });

    it('getIsProposalValidLength with content with length more than Max', () => {
      const isProposalValidLength = ProposalHelper.getIsProposalValidLength(
        141
      );
      expect(isProposalValidLength).toBe(false);
    });

    it('getIsProposalValidLength with content with length minus than Min', () => {
      const isProposalValidLength = ProposalHelper.getIsProposalValidLength(2);
      expect(isProposalValidLength).toBe(false);
    });

    it('getIsProposalValidLength without content', () => {
      const isProposalValidLength = ProposalHelper.getIsProposalValidLength();
      expect(isProposalValidLength).toBe(false);
    });
  });

  describe('sortProposalsByVoted function', () => {
    it('sortProposalsByVoted with empty array', () => {
      const sortedProposals = ProposalHelper.sortProposalsByVoted([]);
      expect(sortedProposals).toEqual([]);
    });

    it('sortProposalsByVoted with proposals', () => {
      const proposals = [
        {
          id: 'foo',
          votes: [
            { hasVoted: false },
            { hasVoted: false },
            { hasVoted: false },
          ],
        },
        {
          id: 'bar',
          votes: [
            { hasVoted: false },
            { hasVoted: false },
            { hasVoted: false },
          ],
        },
        {
          id: 'baz',
          votes: [{ hasVoted: true }, { hasVoted: false }, { hasVoted: false }],
        },
      ];

      const sortedProposals = ProposalHelper.sortProposalsByVoted(proposals);
      expect(Array.isArray(sortedProposals)).toBe(true);
      expect(sortedProposals).toHaveLength(3);
      expect(sortedProposals[0].id).toBe('baz');
    });
  });

  describe('searchFirstUnvotedProposal function', () => {
    it('searchFirstUnvotedProposal with empty array', () => {
      const firstUnvotedProposal = ProposalHelper.searchFirstUnvotedProposal(
        []
      );
      expect(firstUnvotedProposal).toBeUndefined();
    });

    it('searchFirstUnvotedProposal with proposals', () => {
      const fooProposal = {
        id: 'foo',
        votes: [{ hasVoted: true }, { hasVoted: false }, { hasVoted: false }],
      };
      const barProposal = {
        id: 'bar',
        votes: [{ hasVoted: false }, { hasVoted: false }, { hasVoted: false }],
      };
      const bazProposal = {
        id: 'baz',
        votes: [{ hasVoted: true }, { hasVoted: false }, { hasVoted: false }],
      };
      const proposals = [fooProposal, barProposal, bazProposal];

      const firstUnvotedProposal = ProposalHelper.searchFirstUnvotedProposal(
        proposals
      );
      expect(firstUnvotedProposal.id).toBe('bar');
    });
  });
  describe('Search Proposals', () => {
    it('transform tagIds to string', async () => {
      jest.spyOn(ProposalService, 'searchProposals');

      ProposalHelper.searchProposals('12345', ['foo', 'bar']);
      expect(ProposalService.searchProposals).toHaveBeenNthCalledWith(
        1,
        '12345',
        'foo,bar',
        PROPOSALS_LISTING_LIMIT,
        0
      );
    });

    it('calculate skipped proposal', async () => {
      jest.spyOn(ProposalService, 'searchProposals');

      ProposalHelper.searchProposals('12345', ['foo', 'bar'], 3);
      expect(ProposalService.searchProposals).toHaveBeenNthCalledWith(
        1,
        '12345',
        'foo,bar',
        PROPOSALS_LISTING_LIMIT,
        40
      );
    });
    it('return results from api response', async () => {
      ProposalService.searchProposals.mockResolvedValue({
        results: ['foo'],
      });
      const repsonse = await ProposalHelper.searchProposals('12345', [
        'foo',
        'bar',
      ]);
      expect(repsonse).toEqual(['foo']);
    });

    it('return an empty Array and call Logger when api fail', async () => {
      ProposalService.searchProposals.mockRejectedValue(new Error('Api error'));
      jest.spyOn(Logger, 'logError');

      const repsonse = await ProposalHelper.searchProposals('12345', [
        'foo',
        'bar',
      ]);

      expect(Logger.logError).toHaveBeenNthCalledWith(
        1,
        'searchProposals error',
        Error('Api error')
      );
      expect(repsonse).toEqual([]);
    });
  });
});

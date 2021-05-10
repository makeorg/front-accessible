// @flow

import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { SequenceService } from 'Shared/services/Sequence';

jest.mock('Shared/api/QuestionApiService');

describe('Question Service', () => {
  afterEach(() => {
    QuestionApiService.startSequenceByZone.mockRestore();
  });

  const proposals = [
    { id: 'foo', votes: [{ hasVoted: false }] },
    { id: 'bar', votes: [{ hasVoted: false }] },
    { id: 'baz', votes: [{ hasVoted: false }] },
    { id: 'foo', votes: [{ hasVoted: false }] },
    { id: 'voted', votes: [{ hasVoted: true }] },
  ];

  describe('startSequence function with zone parameter', () => {
    it('Call sequence service with right zone params', async () => {
      const includedProposalIds = [];
      QuestionApiService.startSequenceByZone.mockResolvedValue({
        id: 'foo',
        proposals,
        param: 'controversy',
      });

      jest.spyOn(QuestionApiService, 'startSequenceByZone');

      await SequenceService.startSequence(
        'foo',
        includedProposalIds,
        'controversy'
      );

      expect(QuestionApiService.startSequenceByZone).toHaveBeenNthCalledWith(
        1,
        'foo',
        includedProposalIds,
        'controversy'
      );
    });

    it('order only included proposal', async () => {
      const includedProposalIds = ['baz', 'foo'];
      QuestionApiService.startSequenceByZone.mockResolvedValue({
        data: {
          id: 'foo',
          proposals,
          param: 'standard',
        },
      });

      const result = await SequenceService.startSequence(
        'foo',
        includedProposalIds,
        'standard'
      );
      expect(result).toEqual([
        { id: 'baz', votes: [{ hasVoted: false }] },
        { id: 'foo', votes: [{ hasVoted: false }] },
        { id: 'bar', votes: [{ hasVoted: false }] },
      ]);
    });

    it('order when included proposal contain all proposal', async () => {
      const includedProposalIds = ['baz', 'bar', 'foo'];
      QuestionApiService.startSequenceByZone.mockResolvedValue({
        data: {
          id: 'foo',
          proposals,
          param: 'consensus',
        },
      });

      const result = await SequenceService.startSequence(
        'foo',
        includedProposalIds,
        'consensus'
      );
      expect(result).toEqual([
        { id: 'baz', votes: [{ hasVoted: false }] },
        { id: 'bar', votes: [{ hasVoted: false }] },
        { id: 'foo', votes: [{ hasVoted: false }] },
      ]);
    });

    it('includes proposals when required even if they are already voted', async () => {
      const includedProposalIds = ['voted'];
      QuestionApiService.startSequenceByZone.mockResolvedValue({
        data: {
          id: 'foo',
          proposals,
          param: 'consensus',
        },
      });

      const result = await SequenceService.startSequence(
        'foo',
        includedProposalIds,
        'consensus'
      );
      expect(result).toEqual([
        { id: 'voted', votes: [{ hasVoted: true }] },
        { id: 'baz', votes: [{ hasVoted: false }] },
        { id: 'bar', votes: [{ hasVoted: false }] },
        { id: 'foo', votes: [{ hasVoted: false }] },
      ]);
    });
  });

  describe('startSequence function with keyword param', () => {
    it('Call sequence service with right keyword param', async () => {
      const includedProposalIds = [];
      QuestionApiService.startSequenceByKeyword.mockResolvedValue({
        id: 'foo',
        proposals,
        param: 'bar',
      });

      jest.spyOn(QuestionApiService, 'startSequenceByKeyword');

      await SequenceService.startSequence('foo', includedProposalIds, 'bar');

      expect(QuestionApiService.startSequenceByKeyword).toHaveBeenNthCalledWith(
        1,
        'foo',
        includedProposalIds,
        'bar'
      );
    });
  });
});

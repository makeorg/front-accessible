// @flow

import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { SequenceService } from 'Shared/services/Sequence';

jest.mock('Shared/api/QuestionApiService');

describe('Question Service', () => {
  afterEach(() => {
    QuestionApiService.startSequence.mockRestore();
  });

  const proposals = [
    { id: 'foo', votes: [{ hasVoted: false }] },
    { id: 'bar', votes: [{ hasVoted: false }] },
    { id: 'baz', votes: [{ hasVoted: false }] },
    { id: 'foo', votes: [{ hasVoted: false }] },
    { id: 'voted', votes: [{ hasVoted: true }] },
  ];

  describe('startSequence function', () => {
    it('Call sequence service with right params', async () => {
      const includedProposalIds = [];
      QuestionApiService.startSequence.mockResolvedValue({
        id: 'foo',
        proposals,
      });

      jest.spyOn(QuestionApiService, 'startSequence');

      await SequenceService.startSequence('foo', includedProposalIds);

      expect(QuestionApiService.startSequence).toHaveBeenNthCalledWith(
        1,
        'foo',
        includedProposalIds
      );
    });

    it('order only included proposal', async () => {
      const includedProposalIds = ['baz', 'foo'];
      QuestionApiService.startSequence.mockResolvedValue({
        data: {
          id: 'foo',
          proposals,
        },
      });

      const result = await SequenceService.startSequence(
        'foo',
        includedProposalIds
      );
      expect(result).toEqual([
        { id: 'baz', votes: [{ hasVoted: false }] },
        { id: 'foo', votes: [{ hasVoted: false }] },
        { id: 'bar', votes: [{ hasVoted: false }] },
      ]);
    });

    it('order when included proposal contain all proposal', async () => {
      const includedProposalIds = ['baz', 'bar', 'foo'];
      QuestionApiService.startSequence.mockResolvedValue({
        data: {
          id: 'foo',
          proposals,
        },
      });

      const result = await SequenceService.startSequence(
        'foo',
        includedProposalIds
      );
      expect(result).toEqual([
        { id: 'baz', votes: [{ hasVoted: false }] },
        { id: 'bar', votes: [{ hasVoted: false }] },
        { id: 'foo', votes: [{ hasVoted: false }] },
      ]);
    });
  });
});

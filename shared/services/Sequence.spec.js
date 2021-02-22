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
        zone: 'bar',
        keyword: 'keyword',
      });

      jest.spyOn(QuestionApiService, 'startSequence');

      await SequenceService.startSequence(
        'foo',
        includedProposalIds,
        'bar',
        'keyword'
      );

      expect(QuestionApiService.startSequence).toHaveBeenNthCalledWith(
        1,
        'foo',
        includedProposalIds,
        'bar',
        'keyword'
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

    it('includes proposals when required even if they are already voted', async () => {
      const includedProposalIds = ['voted'];
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
        { id: 'voted', votes: [{ hasVoted: true }] },
        { id: 'baz', votes: [{ hasVoted: false }] },
        { id: 'bar', votes: [{ hasVoted: false }] },
        { id: 'foo', votes: [{ hasVoted: false }] },
      ]);
    });
  });
});

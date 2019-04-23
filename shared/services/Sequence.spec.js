// @flow

import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { startSequence } from 'Shared/services/Sequence';

jest.mock('Shared/api/QuestionApiService');

describe('Question Service', () => {
  afterEach(() => {
    QuestionApiService.startSequence.mockRestore();
  });

  const proposals = [{ id: 'foo' }, { id: 'bar' }, { id: 'baz' }];

  describe('startSequence function', () => {
    it('Call sequence service with right params', async () => {
      const includedProposalIds = [];
      QuestionApiService.startSequence.mockResolvedValue({
        id: 'foo',
        proposals,
      });

      jest.spyOn(QuestionApiService, 'startSequence');

      await startSequence('foo', includedProposalIds);

      expect(QuestionApiService.startSequence).toHaveBeenNthCalledWith(
        1,
        'foo',
        includedProposalIds
      );
    });

    it('order only incuded proposal', async () => {
      const includedProposalIds = ['baz', 'foo'];
      QuestionApiService.startSequence.mockResolvedValue({
        id: 'foo',
        proposals,
      });

      const result = await startSequence('foo', includedProposalIds);
      expect(result).toEqual([{ id: 'baz' }, { id: 'foo' }, { id: 'bar' }]);
    });

    it('order when incuded proposal contain all proposal', async () => {
      const includedProposalIds = ['baz', 'bar', 'foo'];
      QuestionApiService.startSequence.mockResolvedValue({
        id: 'foo',
        proposals,
      });

      const result = await startSequence('foo', includedProposalIds);
      expect(result).toEqual([{ id: 'baz' }, { id: 'bar' }, { id: 'foo' }]);
    });
  });
});

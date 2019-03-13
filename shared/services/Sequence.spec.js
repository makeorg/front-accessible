/* @flow */

import { QuestionService } from 'Shared/api/QuestionService';
import { startSequence } from 'Shared/services/Sequence';

jest.mock('Shared/api/QuestionService');

describe('Question Service', () => {
  afterEach(() => {
    QuestionService.startSequence.mockRestore();
  });

  const proposals = [{ id: 'foo' }, { id: 'bar' }, { id: 'baz' }];

  describe('startSequence function', () => {
    it('Call sequence service with right params', async () => {
      const includedProposalIds = [];
      QuestionService.startSequence.mockResolvedValue({ id: 'foo', proposals });

      jest.spyOn(QuestionService, 'startSequence');

      await startSequence('foo', includedProposalIds);

      expect(QuestionService.startSequence).toHaveBeenNthCalledWith(
        1,
        'foo',
        includedProposalIds
      );
    });

    it('order only incuded proposal', async () => {
      const includedProposalIds = ['baz', 'foo'];
      QuestionService.startSequence.mockResolvedValue({ id: 'foo', proposals });

      const result = await startSequence('foo', includedProposalIds);
      expect(result).toEqual([{ id: 'baz' }, { id: 'foo' }, { id: 'bar' }]);
    });

    it('order when incuded proposal contain all proposal', async () => {
      const includedProposalIds = ['baz', 'bar', 'foo'];
      QuestionService.startSequence.mockResolvedValue({ id: 'foo', proposals });

      const result = await startSequence('foo', includedProposalIds);
      expect(result).toEqual([{ id: 'baz' }, { id: 'bar' }, { id: 'foo' }]);
    });
  });
});

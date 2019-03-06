import { ApiService } from 'Shared/api/ApiService';
import { VoteService, PATH_VOTE, PATH_UNVOTE } from './VoteService';

jest.mock('./ApiService');

describe('VoteService', () => {
  beforeEach(() => {
    ApiService.callApi.mockClear();
    jest.spyOn(ApiService, 'callApi');
  });

  describe('vote', () => {
    it('must call ApiService.callApi', async () => {
      await VoteService.vote('12345', 'voteKey', 'proposalKey');
      expect(ApiService.callApi).toHaveBeenNthCalledWith(
        1,
        PATH_VOTE.replace(':proposalId', '12345'),
        {
          method: 'POST',
          body: JSON.stringify({
            voteKey: 'voteKey',
            proposalKey: 'proposalKey',
          }),
          proposalId: '12345',
        }
      );
    });
  });

  describe('unvote', () => {
    it('must call ApiService.callApi', async () => {
      await VoteService.unvote('12345', 'voteKey', 'proposalKey');
      expect(ApiService.callApi).toHaveBeenNthCalledWith(
        1,
        PATH_UNVOTE.replace(':proposalId', '12345'),
        {
          method: 'POST',
          body: JSON.stringify({
            voteKey: 'voteKey',
            proposalKey: 'proposalKey',
          }),
          proposalId: '12345',
        }
      );
    });
  });
});

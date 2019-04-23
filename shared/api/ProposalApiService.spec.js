import { ApiService } from 'Shared/api/ApiService';
import {
  ProposalApiService,
  PATH_PROPOSALS,
  PATH_PROPOSAL_GET,
} from './ProposalApiService';

jest.mock('./ApiService');

describe('ProposalApiService', () => {
  beforeEach(() => {
    ApiService.callApi.mockClear();
    jest.spyOn(ApiService, 'callApi');
  });

  describe('propose', () => {
    it('must call ApiService.callApi', async () => {
      await ProposalApiService.propose('content', '12345');
      expect(ApiService.callApi).toHaveBeenNthCalledWith(1, PATH_PROPOSALS, {
        method: 'POST',
        body: JSON.stringify({
          content: 'content',
          questionId: '12345',
        }),
      });
    });
  });

  describe('getProposal', () => {
    it('must call ApiService.callApi', async () => {
      await ProposalApiService.getProposal('12345');
      expect(ApiService.callApi).toHaveBeenNthCalledWith(
        1,
        PATH_PROPOSAL_GET.replace(':proposalId', '12345'),
        {
          headers: {},
          method: 'GET',
          proposalId: '12345',
        }
      );
    });
  });

  describe('searchProposals', () => {
    it('must call ApiService.callApi', async () => {
      await ProposalApiService.searchProposals('12345');
      expect(ApiService.callApi).toHaveBeenNthCalledWith(1, PATH_PROPOSALS, {
        headers: {},
        method: 'GET',
        params: {
          questionId: '12345',
          limit: 20,
          skip: 0,
          sortAlgorithm: 'taggedFirst',
          tagsIds: undefined,
        },
      });
    });
    it('must filter by tagIds', async () => {
      await ProposalApiService.searchProposals('12345', 'foo, bar');
      expect(ApiService.callApi).toHaveBeenNthCalledWith(1, PATH_PROPOSALS, {
        headers: {},
        method: 'GET',
        params: {
          questionId: '12345',
          limit: 20,
          skip: 0,
          sortAlgorithm: 'taggedFirst',
          tagsIds: 'foo, bar',
        },
      });
    });
  });
});

import { ApiService } from 'Shared/api/ApiService';
import {
  ProposalService,
  PATH_PROPOSALS,
  PATH_PROPOSAL_GET,
} from './ProposalService';

jest.mock('./ApiService');

describe('ProposalService', () => {
  beforeEach(() => {
    ApiService.callApi.mockClear();
    jest.spyOn(ApiService, 'callApi');
  });

  describe('propose', () => {
    it('must call ApiService.callApi', async () => {
      await ProposalService.propose('content', '12345');
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
      await ProposalService.getProposal('12345');
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
      await ProposalService.searchProposals('12345');
      expect(ApiService.callApi).toHaveBeenNthCalledWith(1, PATH_PROPOSALS, {
        headers: {},
        method: 'GET',
        params: {
          questionId: '12345',
          isRandom: true,
          limit: 20,
          skip: 0,
          sortAlgorithm: 'taggedFirst',
          tagsIds: undefined,
        },
      });
    });
  });
});

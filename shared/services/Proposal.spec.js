// @flow

import { ProposalApiService } from 'Shared/api/ProposalApiService';
import * as ProposalService from 'Shared/services/Proposal';

jest.mock('Shared/api/ProposalApiService');
jest.mock('Shared/services/Question');
jest.mock('Shared/services/Logger');

describe('Proposal Service', () => {
  describe('propose function', () => {
    it('add bait text and call ProposalApiService', async () => {
      jest.spyOn(ProposalApiService, 'propose');
      await ProposalService.propose('foo', 'fooQuestionId');

      expect(ProposalApiService.propose).toHaveBeenNthCalledWith(
        1,
        'proposal_submit.baitfoo',
        'fooQuestionId'
      );
    });
  });
});

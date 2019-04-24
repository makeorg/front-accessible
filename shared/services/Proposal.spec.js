// @flow

import { ProposalApiService } from 'Shared/api/ProposalApiService';
import * as ProposalService from 'Shared/services/Proposal';
import * as QuestionService from 'Shared/services/Question';
import { Logger } from 'Shared/services/Logger';

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

    describe('enrichProposalsWithQuestion', () => {
      const proposal1 = {
        id: 'proposal1Id',
        content: 'il faut foo',
        questionId: 'fooQuestionId',
      };
      const proposal2 = {
        id: 'proposal2Id',
        content: 'il faut bar',
        questionId: 'barQuestionId',
      };
      const proposal3 = {
        id: 'proposal3Id',
        content: 'il faut baz',
        questionId: 'barQuestionId',
      };
      const proposals = [proposal1, proposal2, proposal3];

      it('fetch distict questions', async () => {
        jest.spyOn(QuestionService, 'getQuestions');

        await ProposalService.enrichProposalsWithQuestion(proposals);

        expect(QuestionService.getQuestions).toHaveBeenNthCalledWith(1, [
          'fooQuestionId',
          'barQuestionId',
        ]);
      });

      it('return not enriched proposals if fetch of question fail', async () => {
        jest.spyOn(Logger, 'logError');

        QuestionService.getQuestions.mockResolvedValue([]);
        const enrichedProposals = await ProposalService.enrichProposalsWithQuestion(
          proposals
        );

        expect(Logger.logError).toHaveBeenNthCalledWith(
          1,
          Error('Questions load fail for fooQuestionId,barQuestionId')
        );

        expect(enrichedProposals).toEqual(proposals);
      });

      it('enrich proposals with question', async () => {
        const fooQuestion = {
          questionId: 'fooQuestionId',
          slug: 'foo-question',
        };
        const barQuestion = {
          questionId: 'barQuestionId',
          slug: 'bar-question',
        };

        QuestionService.getQuestions.mockResolvedValue([
          fooQuestion,
          barQuestion,
        ]);
        const enrichedProposal1 = {
          ...proposal1,
          question: fooQuestion,
        };
        const enrichedProposal2 = {
          ...proposal2,
          question: barQuestion,
        };
        const enrichedProposal3 = {
          ...proposal3,
          question: barQuestion,
        };
        const enrichedProposals = await ProposalService.enrichProposalsWithQuestion(
          proposals
        );

        expect(enrichedProposals).toEqual([
          enrichedProposal1,
          enrichedProposal2,
          enrichedProposal3,
        ]);
      });
    });
  });
});

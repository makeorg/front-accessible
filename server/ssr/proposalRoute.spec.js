import httpMocks from 'node-mocks-http';
import { createInitialState } from 'Shared/store/initialState';
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import { SequenceService } from 'Shared/api/SequenceService';
import { proposalRoute } from './proposalRoute';
import { reactRender } from '../reactRender';
import { logError } from './helpers/ssr.helper';

jest.mock('Shared/api/SequenceService');
jest.mock('../service/QuestionService', () => ({
  getQuestionConfiguration: jest.fn(),
}));
jest.mock('Shared/api/ProposalApiService');
jest.mock('../reactRender', () => ({ reactRender: jest.fn() }));
jest.mock('./helpers/ssr.helper', () => ({
  logError: jest.fn(),
}));
jest.mock('Shared/store/initialState', () => ({
  createInitialState: jest.fn(),
}));

const country = 'FR';
const language = 'fr';
const sessionId = 'foo';
const questionSlug = 'baz';

describe('Proposal route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('The route', () => {
    it('construct route initial state and render', async () => {
      const questionId = '1234';
      const proposalId = 'abcd';
      SequenceService.fetchConfiguration.mockReturnValue('questionconfigData');
      ProposalApiService.getProposal.mockReturnValue({
        question: {
          questionId,
        },
        proposalId,
      });
      createInitialState.mockReturnValue({ sequence: {} });
      const request = httpMocks.createRequest({
        params: {
          country,
          language,
          sessionId,
          questionSlug,
          proposalId: 'abcd',
        },
      });
      const response = httpMocks.createResponse();

      await proposalRoute(request, response, () => {});

      expect(reactRender).toHaveBeenCalledWith(request, response, {
        proposal: {
          data: { question: { questionId: '1234' }, proposalId: 'abcd' },
        },
        questions: {
          '1234': { questionConfiguration: 'questionconfigData' },
        },
        sequence: { questionId: '1234' },
      });
    });

    it('throw an error and redirect to 404', async () => {
      const error = new Error('fooError');
      SequenceService.fetchConfiguration.mockImplementation(() => {
        throw error;
      });

      const request = httpMocks.createRequest({
        params: {
          country,
          language,
          sessionId,
          questionSlug,
        },
      });
      const response = httpMocks.createResponse();

      await proposalRoute(request, response, () => {});
      expect(logError).toHaveBeenNthCalledWith(1, error);
      expect(response.statusCode).toEqual(404);
    });
  });
});

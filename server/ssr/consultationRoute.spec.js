import httpMocks from 'node-mocks-http';
import { createInitialState } from 'Shared/store/initialState';
import { SequenceService } from 'Shared/api/SequenceService';
import { consultationRoute } from './consultationRoute';
import { reactRender } from '../reactRender';
import { logError } from './helpers/ssr.helper';
import { getQuestion } from '../service/QuestionService';

jest.mock('../service/QuestionService', () => ({
  getQuestionConfiguration: jest.fn(),
  getQuestion: jest.fn(),
}));
jest.mock('Shared/api/SequenceService');
jest.mock('../reactRender', () => ({ reactRender: jest.fn() }));
jest.mock('./helpers/ssr.helper', () => ({
  logError: jest.fn(),
}));
jest.mock('Shared/store/initialState', () => ({
  createInitialState: jest.fn(),
}));

const country = 'FR';
const language = 'fr';
const fooQuestion = {
  id: 'fooId',
  questionId: '1234',
};
const questionSlug = 'bar';

const request = httpMocks.createRequest({
  params: {
    country,
    language,
    questionSlug,
  },
});
const response = httpMocks.createResponse();

describe('Proposal route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('The route', () => {
    it('construct route initial state and render', async () => {
      getQuestion.mockReturnValue(fooQuestion);
      SequenceService.fetchConfiguration.mockReturnValue('questionconfigData');
      createInitialState.mockReturnValue({ sequence: {}, proposal: {} });

      await consultationRoute(request, response, () => {});
      expect(reactRender).toHaveBeenCalledWith(request, response, {
        questions: {
          bar: {
            question: fooQuestion,
            questionConfiguration: 'questionconfigData',
          },
        },
        sequence: { questionSlug: 'bar' },
        proposal: {},
      });
    });

    it('throw an error', async () => {
      const error = new Error('fooError');
      SequenceService.fetchConfiguration.mockImplementation(() => {
        throw error;
      });

      await consultationRoute(request, response, () => {});
      expect(logError).toHaveBeenNthCalledWith(1, error);
    });
  });
});

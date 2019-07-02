import httpMocks from 'node-mocks-http';
import { createInitialState } from 'Shared/store/initialState';
import { SequenceService } from 'Shared/api/SequenceService';
import { isInProgress } from 'Shared/helpers/date';
import { consultationRoute } from './consultationRoute';
import { reactRender } from '../reactRender';
import { logError } from './helpers/ssr.helper';
import { getQuestion } from '../service/QuestionService';

jest.mock('Shared/helpers/date', () => ({
  isInProgress: jest.fn(),
}));
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
  aboutUrl: 'http://localhost/goo',
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

describe('Consultation page route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('The route', () => {
    it('construct route initial state and render', async () => {
      getQuestion.mockReturnValue(fooQuestion);
      SequenceService.fetchConfiguration.mockReturnValue('questionconfigData');
      createInitialState.mockReturnValue({});
      isInProgress.mockReturnValue(true);

      await consultationRoute(request, response);
      expect(reactRender).toHaveBeenCalledWith(request, response, {
        questions: {
          bar: {
            question: fooQuestion,
            questionConfiguration: 'questionconfigData',
          },
        },
        currentQuestion: 'bar',
      });
    });

    it('redirect to about url if consultation is closed', async () => {
      isInProgress.mockReturnValue(false);
      getQuestion.mockReturnValue(fooQuestion);
      jest.spyOn(response, 'redirect');

      await consultationRoute(request, response);

      expect(response.redirect).toHaveBeenCalledWith('http://localhost/goo');
      expect(response.statusCode).toBe(302);
    });

    it('throw an error', async () => {
      isInProgress.mockReturnValue(true);
      const error = new Error('fooError');
      SequenceService.fetchConfiguration.mockImplementation(() => {
        throw error;
      });

      await consultationRoute(request, response);
      expect(logError).toHaveBeenNthCalledWith(1, error);
    });
  });
});

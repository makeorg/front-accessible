import httpMocks from 'node-mocks-http';
import { createInitialState } from 'Shared/store/initialState';
import { SequenceService } from 'Shared/api/SequenceService';
import { isInProgress } from 'Shared/helpers/date';
import { QuestionNodeService } from 'Shared/api/QuestionNodeService';
import { consultationRoute } from './consultationRoute';
import { reactRender } from '../reactRender';
import { logError } from './helpers/ssr.helper';
import { getQuestion } from '../service/QuestionService';

jest.mock('Shared/helpers/date', () => ({
  isInProgress: jest.fn(),
}));
jest.mock('../service/QuestionService', () => ({
  getQuestion: jest.fn(),
}));
jest.mock('Shared/api/SequenceService');
jest.mock('Shared/api/QuestionNodeService');
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
const fooQuestionWithResults = {
  id: 'fooId',
  questionId: '1234',
  aboutUrl: 'http://localhost/goo',
  displayResults: true,
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
            questionResults: undefined,
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

    it('construct route initial state with questionResults and render', async () => {
      isInProgress.mockReturnValue(true);
      getQuestion.mockReturnValue(fooQuestionWithResults);
      SequenceService.fetchConfiguration.mockReturnValue('questionconfigData');
      QuestionNodeService.fetchResults.mockReturnValue('questionResults');
      createInitialState.mockReturnValue({});

      await consultationRoute(request, response);
      expect(reactRender).toHaveBeenCalledWith(request, response, {
        questions: {
          bar: {
            question: fooQuestionWithResults,
            questionConfiguration: 'questionconfigData',
            questionResults: 'questionResults',
          },
        },
        currentQuestion: 'bar',
      });
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

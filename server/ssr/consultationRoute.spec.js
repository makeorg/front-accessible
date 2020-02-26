import httpMocks from 'node-mocks-http';
import { createInitialState } from 'Shared/store/initialState';
import { isInProgress } from 'Shared/helpers/date';
import { QuestionNodeService } from 'Shared/api/QuestionNodeService';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { QuestionService } from '../service/QuestionService';
import { consultationRoute } from './consultationRoute';
import { reactRender } from '../reactRender';

jest.mock('Shared/helpers/date', () => ({
  isInProgress: jest.fn(),
}));
jest.mock('Shared/api/QuestionApiService');
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
  displayResults: false,
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
      QuestionApiService.getDetail.mockReturnValue({ data: fooQuestion });
      createInitialState.mockReturnValue({});
      isInProgress.mockReturnValue(true);
      QuestionService.clearCache();

      await consultationRoute(request, response);
      expect(reactRender).toHaveBeenCalledWith(request, response, {
        questions: {
          bar: {
            question: fooQuestion,
            questionResults: undefined,
          },
        },
        currentQuestion: 'bar',
      });
    });

    it('redirect to about url if consultation is closed', async () => {
      isInProgress.mockReturnValue(false);
      const question = {
        ...fooQuestion,
        displayResults: false,
      };
      QuestionApiService.getDetail.mockReturnValue({ data: question });
      jest.spyOn(response, 'redirect');
      QuestionService.clearCache();

      await consultationRoute(request, response);

      expect(response.redirect).toHaveBeenCalledWith('http://localhost/goo');
      expect(response.statusCode).toBe(302);
    });

    it('construct route initial state with questionResults and render', async () => {
      isInProgress.mockReturnValue(true);
      QuestionApiService.getDetail.mockReturnValue({
        data: fooQuestionWithResults,
      });
      QuestionNodeService.fetchResults.mockReturnValue('questionResults');
      createInitialState.mockReturnValue({});
      QuestionService.clearCache();

      await consultationRoute(request, response);
      expect(reactRender).toHaveBeenCalledWith(request, response, {
        questions: {
          bar: {
            question: fooQuestionWithResults,
            questionResults: 'questionResults',
          },
        },
        currentQuestion: 'bar',
      });
    });
  });
});

import httpMocks from 'node-mocks-http';
import { createInitialState } from 'Shared/store/initialState';
import { isInProgress } from 'Shared/helpers/date';
import { sequenceRoute } from './sequenceRoute';
import { reactRender } from '../reactRender';
import { getQuestion } from '../service/QuestionService';

jest.mock('Shared/helpers/date', () => ({
  isInProgress: jest.fn(),
}));
jest.mock('../service/QuestionService', () => ({
  getQuestion: jest.fn(),
}));
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

describe('Sequence page route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('The route', () => {
    it('construct route initial state and render', async () => {
      getQuestion.mockReturnValue(fooQuestion);
      createInitialState.mockReturnValue({});
      isInProgress.mockReturnValue(true);

      await sequenceRoute(request, response);
      expect(reactRender).toHaveBeenCalledWith(request, response, {
        questions: {
          bar: {
            question: fooQuestion,
          },
        },
        currentQuestion: 'bar',
      });
    });

    it('redirect to about url if consultation is closed', async () => {
      isInProgress.mockReturnValue(false);
      getQuestion.mockReturnValue(fooQuestion);
      jest.spyOn(response, 'redirect');

      await sequenceRoute(request, response);

      expect(response.redirect).toHaveBeenCalledWith('http://localhost/goo');
      expect(response.statusCode).toBe(302);
    });
  });
});

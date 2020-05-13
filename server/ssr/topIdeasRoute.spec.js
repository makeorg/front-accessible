import httpMocks from 'node-mocks-http';
import { createInitialState } from 'Shared/store/initialState';
import { topIdeasRoute } from './topIdeasRoute';
import { reactRender } from '../reactRender';
import { QuestionService } from '../service/QuestionService';

jest.mock('Shared/helpers/date', () => ({
  isInProgress: jest.fn(),
}));
jest.mock('../service/QuestionService');
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
  sequenceConfig: {},
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

describe('Ideas page route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('The route', () => {
    it('construct route initial state and render', async () => {
      QuestionService.getQuestion.mockReturnValue(fooQuestion);
      createInitialState.mockReturnValue({});

      await topIdeasRoute(request, response);
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
  });
});

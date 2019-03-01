import httpMocks from 'node-mocks-http';
import { SequenceService } from 'Shared/api/SequenceService';
import { QuestionService } from 'Shared/api/QuestionService';
import { createInitialState } from 'Shared/store/initialState';
import { consultationRoute } from './consultationRoute';
import { reactRender } from '../reactRender';
import { logError } from './helpers/ssr.helper';

jest.mock('Shared/api/QuestionService');
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
  id: 'foo',
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
      SequenceService.fetchConfiguration.mockReturnValue('questionconfigData');
      QuestionService.getDetail.mockReturnValue(fooQuestion);
      createInitialState.mockReturnValue({ consultation: {} });

      await consultationRoute(request, response, () => {});
      expect(reactRender).toHaveBeenCalledWith(request, response, {
        consultation: {
          question: fooQuestion,
          questionConfiguration: 'questionconfigData',
        },
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

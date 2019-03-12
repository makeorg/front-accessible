import httpMocks from 'node-mocks-http';
import { QuestionService } from 'Shared/api/QuestionService';
import { UserService } from 'Shared/api/UserService';
import { HTTP_NO_CONTENT, HTTP_NOT_FOUND } from 'Shared/constants/httpStatus';
import { createInitialState } from 'Shared/store/initialState';
import { reactRender } from '../reactRender';
import { accountActivationRoute } from './accountActivationRoute';

jest.mock('../reactRender', () => ({ reactRender: jest.fn() }));
jest.mock('Shared/api/UserService');
jest.mock('Shared/api/QuestionService');

const initialState = createInitialState();
const requestParams = {
  verificationToken: 'bar',
  userId: 'foo',
  country: 'FR',
  language: 'fr',
};
const expectedHeaders = {
  'x-make-question': 'foo',
  'x-make-question-id': 'foo',
  'x-make-country': 'FR',
  'x-make-language': 'fr',
};

describe('Account activation route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('add the question to the initialState and set headers', async () => {
    const fooQuestion = {
      id: 'foo',
    };
    QuestionService.getDetail.mockReturnValue(fooQuestion);
    const routeState = {
      ...initialState,
      questions: {
        foo: {
          question: fooQuestion,
        },
      },
      sequence: {
        ...initialState.sequence,
        questionId: fooQuestion.id,
      },
    };

    const request = httpMocks.createRequest({
      params: requestParams,
      query: { question: fooQuestion.id },
    });
    const response = httpMocks.createResponse();
    await accountActivationRoute(request, response, () => {});
    expect(QuestionService.getDetail).toHaveBeenCalledWith(
      fooQuestion.id,
      expectedHeaders
    );
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });

  it('activate successfully and add success notification to state', async () => {
    const fooQuestion = {
      id: 'foo',
    };
    UserService.verifyUser.mockReturnValue(HTTP_NO_CONTENT);
    QuestionService.getDetail.mockReturnValue({ id: fooQuestion.id });

    const request = httpMocks.createRequest({
      params: requestParams,
      query: {
        question: fooQuestion.id,
      },
    });
    const response = httpMocks.createResponse();
    const routeState = {
      ...initialState,
      notification: {
        contentType: 'ACTIVATION_SUCCESS_CONTENT',
      },
      questions: {
        foo: {
          question: fooQuestion,
        },
      },
      sequence: {
        ...initialState.sequence,
        questionId: fooQuestion.id,
      },
    };
    await accountActivationRoute(request, response, () => {});
    expect(UserService.verifyUser).toHaveBeenCalledWith(
      'foo',
      'bar',
      expectedHeaders
    );
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });

  it('activate fail and add fail notification to state', async () => {
    const fooQuestion = {
      id: 'foo',
    };

    UserService.verifyUser.mockReturnValue(HTTP_NOT_FOUND);
    QuestionService.getDetail.mockReturnValue({ id: fooQuestion.id });

    const request = httpMocks.createRequest({
      params: requestParams,
      query: {
        question: fooQuestion.id,
      },
    });
    const response = httpMocks.createResponse();
    const routeState = {
      ...initialState,
      notification: {
        contentType: 'ACTIVATION_FAILURE_CONTENT',
      },
      questions: {
        foo: {
          question: fooQuestion,
        },
      },
      sequence: {
        ...initialState.sequence,
        questionId: fooQuestion.id,
      },
    };

    await accountActivationRoute(request, response, () => {});
    expect(UserService.verifyUser).toHaveBeenCalledWith(
      'foo',
      'bar',
      expectedHeaders
    );
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });
});

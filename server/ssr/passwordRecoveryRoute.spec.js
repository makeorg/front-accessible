import httpMocks from 'node-mocks-http';
import { QuestionService } from 'Shared/api/QuestionService';
import { UserService } from 'Shared/api/UserService';
import { HTTP_NO_CONTENT, HTTP_NOT_FOUND } from 'Shared/constants/httpStatus';
import { createInitialState } from 'Shared/store/initialState';
import { reactRender } from '../reactRender';
import { passwordRecoveryRoute } from './passwordRecoveryRoute';

jest.mock('../reactRender', () => ({ reactRender: jest.fn() }));
jest.mock('Shared/api/UserService');
jest.mock('Shared/api/QuestionService');

const initialState = createInitialState();
const fooQuestion = { id: 'foo' };
const queryParams = { question: fooQuestion.id };
const requestParams = {
  resetToken: 'bar',
  userId: 'foo',
  country: 'FR',
  language: 'fr',
};
const expectedHeaders = {
  'x-make-question': fooQuestion.id,
  'x-make-question-id': fooQuestion.id,
  'x-make-country': 'FR',
  'x-make-language': 'fr',
};

describe('Account activation route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('add the question to the initialState and set headers', async () => {
    QuestionService.getDetail.mockReturnValue(fooQuestion);
    const routeState = {
      ...initialState,
      user: {
        passwordRecovery: {
          validToken: false,
          resetToken: requestParams.resetToken,
          userId: requestParams.userId,
        },
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

    const request = httpMocks.createRequest({
      params: requestParams,
      query: queryParams,
    });
    const response = httpMocks.createResponse();

    await passwordRecoveryRoute(request, response, () => {});

    expect(QuestionService.getDetail).toHaveBeenCalledWith(
      fooQuestion.id,
      expectedHeaders
    );
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });

  it('activate successfully and add success notification to state', async () => {
    UserService.resetPasswordTokenCheck.mockReturnValue(HTTP_NO_CONTENT);
    QuestionService.getDetail.mockReturnValue(fooQuestion);

    const request = httpMocks.createRequest({
      params: requestParams,
      query: queryParams,
    });
    const response = httpMocks.createResponse();
    const routeState = {
      ...initialState,
      user: {
        passwordRecovery: {
          validToken: true,
          resetToken: requestParams.resetToken,
          userId: requestParams.userId,
        },
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

    await passwordRecoveryRoute(request, response, () => {});

    expect(UserService.resetPasswordTokenCheck).toHaveBeenCalledWith(
      requestParams.userId,
      requestParams.resetToken,
      expectedHeaders
    );
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });

  it('activate fail and add fail notification to state', async () => {
    UserService.resetPasswordTokenCheck.mockReturnValue(HTTP_NOT_FOUND);
    QuestionService.getDetail.mockReturnValue(fooQuestion);

    const request = httpMocks.createRequest({
      params: requestParams,
      query: queryParams,
    });
    const response = httpMocks.createResponse();
    const routeState = {
      ...initialState,
      user: {
        passwordRecovery: {
          validToken: false,
          resetToken: requestParams.resetToken,
          userId: requestParams.userId,
        },
      },
      notification: {
        contentType: 'PASSWORD_RECOVERY_FAILURE_CONTENT',
        status: HTTP_NOT_FOUND,
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

    await passwordRecoveryRoute(request, response, () => {});
    expect(UserService.resetPasswordTokenCheck).toHaveBeenCalledWith(
      requestParams.userId,
      requestParams.resetToken,
      expectedHeaders
    );
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });
});

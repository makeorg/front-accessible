import httpMocks from 'node-mocks-http';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { UserApiService } from 'Shared/api/UserApiService';
import { HTTP_NO_CONTENT, HTTP_NOT_FOUND } from 'Shared/constants/httpStatus';
import { createInitialState } from 'Shared/store/initialState';
import { reactRender } from '../reactRender';
import { passwordRecoveryRoute } from './passwordRecoveryRoute';

jest.mock('../reactRender', () => ({ reactRender: jest.fn() }));
jest.mock('Shared/api/UserApiService');
jest.mock('Shared/api/QuestionApiService');

const initialState = createInitialState();
const fooQuestion = { id: 'foo', slug: 'bar' };
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
    QuestionApiService.getDetail.mockReturnValue(fooQuestion);
    const routeState = {
      ...initialState,
      user: {
        ...initialState.user,
        passwordRecovery: {
          validToken: false,
          resetToken: requestParams.resetToken,
          userId: requestParams.userId,
        },
      },
      questions: {
        [fooQuestion.slug]: {
          question: fooQuestion,
        },
      },
      currentQuestion: fooQuestion.slug,
    };

    const request = httpMocks.createRequest({
      params: requestParams,
      query: queryParams,
    });
    const response = httpMocks.createResponse();

    await passwordRecoveryRoute(request, response, () => {});

    expect(QuestionApiService.getDetail).toHaveBeenCalledWith(
      fooQuestion.id,
      expectedHeaders
    );
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });

  it('activate successfully and add success notification to state', async () => {
    UserApiService.resetPasswordTokenCheck.mockReturnValue(HTTP_NO_CONTENT);
    QuestionApiService.getDetail.mockReturnValue(fooQuestion);

    const request = httpMocks.createRequest({
      params: requestParams,
      query: queryParams,
    });
    const response = httpMocks.createResponse();
    const routeState = {
      ...initialState,
      user: {
        ...initialState.user,
        passwordRecovery: {
          validToken: true,
          resetToken: requestParams.resetToken,
          userId: requestParams.userId,
        },
      },
      questions: {
        [fooQuestion.slug]: {
          question: fooQuestion,
        },
      },
      currentQuestion: fooQuestion.slug,
    };

    await passwordRecoveryRoute(request, response, () => {});

    expect(UserApiService.resetPasswordTokenCheck).toHaveBeenCalledWith(
      requestParams.userId,
      requestParams.resetToken,
      expectedHeaders
    );
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });

  it('activate fail and add fail notification to state', async () => {
    UserApiService.resetPasswordTokenCheck.mockRejectedValue(HTTP_NOT_FOUND);
    QuestionApiService.getDetail.mockReturnValue(fooQuestion);

    const request = httpMocks.createRequest({
      params: requestParams,
      query: queryParams,
    });
    const response = httpMocks.createResponse();
    const routeState = {
      ...initialState,
      user: {
        ...initialState.user,
        passwordRecovery: {
          validToken: false,
          resetToken: requestParams.resetToken,
          userId: requestParams.userId,
        },
      },
      notification: {
        contentType: 'PASSWORD_RECOVERY_FAILURE_CONTENT',
      },
      questions: {
        [fooQuestion.slug]: {
          question: fooQuestion,
        },
      },
      currentQuestion: fooQuestion.slug,
    };

    await passwordRecoveryRoute(request, response, () => {});
    expect(UserApiService.resetPasswordTokenCheck).toHaveBeenCalledWith(
      requestParams.userId,
      requestParams.resetToken,
      expectedHeaders
    );
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });
});

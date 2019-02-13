import httpMocks from 'node-mocks-http';
import { QuestionService } from 'Shared/api/QuestionService';
import UserService from 'Shared/api/UserService';
import { HTTP_NO_CONTENT, HTTP_NOT_FOUND } from 'Shared/constants/httpStatus';
import { createInitialState } from 'Shared/store/initialState';
import { reactRender } from '../reactRender';
import { passwordRecoveryRoute } from './passwordRecoveryRoute';

jest.mock('../reactRender', () => ({ reactRender: jest.fn() }));
jest.mock('Shared/api/UserService', () => ({ resetPasswordTokenCheck: jest.fn() }));
jest.mock('Shared/api/QuestionService');

const initialState = createInitialState();
const requestParams = {
  resetToken: 'bar',
  userId: 'foo',
  country: 'FR',
  language: 'fr'
};
const expectedHeaders = {
  'x-make-question': 'foo',
  'x-make-question-id': 'foo',
  'x-make-country': 'FR',
  'x-make-language': 'fr'
};

describe('Account activation route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('add the question to the initialState and set headers', async () => {
    const fooQuestion = {
      id: 'foo'
    };
    QuestionService.getDetail.mockReturnValue(fooQuestion);
    const routeState = {
      ...initialState,
      user: {
        passwordRecovery: {
          validToken: false,
          resetToken: requestParams.resetToken,
          userId: requestParams.userId
        }
      },
      sequence: {
        ...initialState.sequence,
        question: fooQuestion
      }
    };

    const request = httpMocks.createRequest({
      params: requestParams,
      query: { question: fooQuestion.id }
    });
    const response = httpMocks.createResponse();

    await passwordRecoveryRoute(request, response, () => { });

    expect(QuestionService.getDetail).toHaveBeenCalledWith(fooQuestion.id, expectedHeaders);
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });

  it('activate successfully and add success notification to state', async () => {
    const fooQuestionId = 'foo';
    UserService.resetPasswordTokenCheck.mockReturnValue(HTTP_NO_CONTENT);
    QuestionService.getDetail.mockReturnValue({ id: fooQuestionId });

    const request = httpMocks.createRequest({
      params: requestParams,
      query: {
        question: fooQuestionId
      }
    });
    const response = httpMocks.createResponse();
    const routeState = {
      ...initialState,
      user: {
        passwordRecovery: {
          validToken: true,
          resetToken: requestParams.resetToken,
          userId: requestParams.userId
        }
      },
      sequence: {
        ...initialState.sequence,
        question: { id: fooQuestionId }
      }
    };

    await passwordRecoveryRoute(request, response, () => { });

    expect(UserService.resetPasswordTokenCheck)
      .toHaveBeenCalledWith(
        requestParams.userId,
        requestParams.resetToken,
        expectedHeaders
      );
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });

  it('activate fail and add fail notification to state', async () => {
    const fooQuestionId = 'foo';
    UserService.resetPasswordTokenCheck.mockReturnValue(HTTP_NOT_FOUND);
    QuestionService.getDetail.mockReturnValue({ id: fooQuestionId });

    const request = httpMocks.createRequest({
      params: requestParams,
      query: {
        question: fooQuestionId
      }
    });
    const response = httpMocks.createResponse();
    const routeState = {
      ...initialState,
      user: {
        passwordRecovery: {
          validToken: false,
          resetToken: requestParams.resetToken,
          userId: requestParams.userId
        }
      },
      notification: {
        contentType: 'PASSWORD_RECOVERY_FAILURE_CONTENT',
        status: HTTP_NOT_FOUND
      },
      sequence: {
        ...initialState.sequence,
        question: { id: fooQuestionId }
      }
    };

    await passwordRecoveryRoute(request, response, () => { });
    expect(UserService.resetPasswordTokenCheck)
      .toHaveBeenCalledWith(
        requestParams.userId,
        requestParams.resetToken,
        expectedHeaders
      );
    expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
  });
});

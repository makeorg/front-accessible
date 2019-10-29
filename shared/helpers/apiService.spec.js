import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { updateRequestContext } from './apiService';

describe('Update Request Context', () => {
  const question = {
    operationId: 'foo',
    questionId: 'bar',
  };
  it('update Request Context values', () => {
    updateRequestContext(question);
    expect(apiClient.operationId).toEqual('foo');
    expect(apiClient.questionId).toEqual('bar');
  });
});

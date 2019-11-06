import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { updateRequestContext } from './apiService';

describe('Update Request Context', () => {
  const question = {
    questionId: 'bar',
  };
  it('update Request Context values', () => {
    updateRequestContext(question);
    expect(apiClient.questionId).toEqual('bar');
  });
});

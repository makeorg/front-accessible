import { apiClient } from 'Shared/api/ApiService/ApiService.client';

export const updateRequestContext = question => {
  apiClient.questionId = question.questionId;
  apiClient.operationId = question.operationId;
};

import { ApiService } from 'Shared/api/ApiService';
import {
  QualificationService,
  PATH_QUALIFICATION,
  PATH_UNQUALIFICATION,
} from './QualificationService';

jest.mock('./ApiService');

describe('QualificationService', () => {
  beforeEach(() => {
    ApiService.callApi.mockClear();
    jest.spyOn(ApiService, 'callApi');
  });

  describe('qualify', () => {
    it('must call ApiService.callApi', async () => {
      await QualificationService.qualify(
        '12345',
        'proposalKey',
        'voteKey',
        'qualificationKey'
      );
      expect(ApiService.callApi).toHaveBeenNthCalledWith(
        1,
        PATH_QUALIFICATION.replace(':proposalId', '12345'),
        {
          method: 'POST',
          body: JSON.stringify({
            voteKey: 'voteKey',
            qualificationKey: 'qualificationKey',
            proposalKey: 'proposalKey',
          }),
          proposalId: '12345',
        }
      );
    });
  });

  describe('unqualify', () => {
    it('must call ApiService.callApi', async () => {
      await QualificationService.unqualify(
        '12345',
        'proposalKey',
        'voteKey',
        'qualificationKey'
      );
      expect(ApiService.callApi).toHaveBeenNthCalledWith(
        1,
        PATH_UNQUALIFICATION.replace(':proposalId', '12345'),
        {
          method: 'POST',
          body: JSON.stringify({
            voteKey: 'voteKey',
            qualificationKey: 'qualificationKey',
            proposalKey: 'proposalKey',
          }),
          proposalId: '12345',
        }
      );
    });
  });
});

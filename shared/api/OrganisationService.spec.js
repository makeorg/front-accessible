import { ApiService } from 'Shared/api/ApiService';
import {
  OrganisationService,
  ORGANISATIONS_PATH,
  ORGANISATION_PROPOSALS_PATH,
  ORGANISATION_VOTES_PATH,
} from './OrganisationService';

jest.mock('./ApiService');

describe('OrganisationService', () => {
  beforeEach(() => {
    ApiService.callApi.mockClear();
    jest.spyOn(ApiService, 'callApi');
  });

  describe('getOrganisations', () => {
    it('must call ApiService.callApi', async () => {
      await OrganisationService.getOrganisations('foo');
      expect(ApiService.callApi).toHaveBeenNthCalledWith(
        1,
        ORGANISATIONS_PATH,
        {
          method: 'GET',
          params: {
            slug: 'foo',
          },
        }
      );
    });
  });

  describe('getOrganisationProposals', () => {
    it('must call ApiService.callApi', async () => {
      await OrganisationService.getOrganisationProposals('foo');
      expect(ApiService.callApi).toHaveBeenNthCalledWith(
        1,
        ORGANISATION_PROPOSALS_PATH.replace(':organisationId', 'foo'),
        {
          method: 'GET',
        }
      );
    });
  });

  describe('getOrganisationsVotes', () => {
    it('must call ApiService.callApi', async () => {
      await OrganisationService.getOrganisationVotes('foo');
      expect(ApiService.callApi).toHaveBeenNthCalledWith(
        1,
        ORGANISATION_VOTES_PATH.replace(':organisationId', 'foo'),
        {
          method: 'GET',
          params: {
            votes: 'agree,disagree',
          },
        }
      );
    });
  });
});

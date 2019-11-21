// @flow

import { PROPOSALS_LISTING_LIMIT } from 'Shared/constants/proposal';
import { ApiService } from './ApiService';

export const ORGANISATIONS_PATH = '/organisations';
export const ORGANISATION_PROPOSALS_PATH =
  '/organisations/:organisationId/proposals';
export const ORGANISATION_VOTES_PATH = '/organisations/:organisationId/votes';

export class OrganisationApiService {
  static getOrganisations(slug: string) {
    return ApiService.callApi(ORGANISATIONS_PATH, {
      method: 'GET',
      params: {
        slug,
      },
    });
  }

  static search(country: string, language: string, query: string) {
    return ApiService.callApi(ORGANISATIONS_PATH, {
      method: 'GET',
      params: {
        country,
        language,
        organisationName: query,
      },
    });
  }

  static getOrganisationProposals(
    organisationId: string,
    seed?: ?number = null,
    limit?: number = PROPOSALS_LISTING_LIMIT,
    skip?: number = 0
  ) {
    return ApiService.callApi(
      ORGANISATION_PROPOSALS_PATH.replace(':organisationId', organisationId),
      {
        method: 'GET',
        params: { sort: 'createdAt', order: 'desc', seed, limit, skip },
      }
    );
  }

  static getOrganisationVotes(
    organisationId: string,
    seed?: ?number = null,
    limit?: number = PROPOSALS_LISTING_LIMIT,
    skip?: number = 0
  ) {
    return ApiService.callApi(
      ORGANISATION_VOTES_PATH.replace(':organisationId', organisationId),
      {
        method: 'GET',
        params: {
          votes: 'agree,disagree',
          seed,
          limit,
          skip,
        },
      }
    );
  }
}

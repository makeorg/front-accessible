// @flow
import { OrganisationApiService } from 'Shared/api/OrganisationApiService';
import { PROPOSALS_LISTING_LIMIT } from 'Shared/constants/proposal';
import {
  type OrganisationsType,
  type OrganisationType,
  type OrganisationVotesType,
} from 'Shared/types/organisation';
import { type ProposalsType } from 'Shared/types/proposal';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const searchOrganisations = async (
  country: string,
  language: string,
  content: string
): Promise<?OrganisationsType> => {
  try {
    const response = await OrganisationApiService.search(
      country,
      language,
      content
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getOrganisationBySlug = async (
  slug: string
): Promise<?OrganisationType> => {
  try {
    const response = await OrganisationApiService.getOrganisations(slug);

    const organisation = response.data.results.find(
      result => result.slug === slug
    );

    if (!organisation) {
      return null;
    }

    return organisation;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getProposals = async (
  organisationId: string,
  seed: ?number = null,
  page: number = 0
): Promise<?ProposalsType> => {
  const limit = PROPOSALS_LISTING_LIMIT;
  const skip = page * limit;

  try {
    const response = await OrganisationApiService.getOrganisationProposals(
      organisationId,
      seed,
      limit,
      skip
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getVotes = async (
  organisationId: string,
  seed: ?number = null,
  page: number = 0
): Promise<?OrganisationVotesType> => {
  const limit = PROPOSALS_LISTING_LIMIT;
  const skip = page * limit;

  try {
    const response = await OrganisationApiService.getOrganisationVotes(
      organisationId,
      seed,
      limit,
      skip
    );
    const { results } = response.data;

    const proposals = results.map(result => result.proposal);

    const organisationVotes = results.map(result => {
      const Proposal = proposals.find(
        proposal => proposal.id === result.proposal.id
      );
      return {
        ...result,
        proposal: Proposal,
      };
    });

    return {
      results: organisationVotes,
      total: response.total,
      seed: response.seed,
    };
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

export const OrganisationService = {
  searchOrganisations,
  getOrganisationBySlug,
  getProposals,
  getVotes,
};

// @flow
import { OrganisationApiService } from 'Shared/api/OrganisationApiService';
import { Logger } from 'Shared/services/Logger';
import {
  type ApiSearchOrganisationsResponseType,
  type ApiSearchProposalsResponseType,
  type ApiOrganisationVotesResponseType,
} from 'Shared/types/api';
import { PROPOSALS_LISTING_LIMIT } from 'Shared/constants/proposal';

export const searchOrganisations = async (
  country: string,
  language: string,
  content: string
): ApiSearchOrganisationsResponseType | Object => {
  try {
    const response = await OrganisationApiService.search(
      country,
      language,
      content
    );

    return response;
  } catch (error) {
    Logger.logError(Error(error));
    return {};
  }
};
export const getOrganisationBySlug = async (slug: string) => {
  try {
    const response = await OrganisationApiService.getOrganisations(slug);
    const organisation = response.results.find(result => result.slug === slug);

    if (!organisation) {
      return null;
    }

    return organisation;
  } catch (error) {
    Logger.logError(Error(error));
    return null;
  }
};

export const getProposals = async (
  organisationId: string,
  seed: ?number = null,
  page: number = 0
): Promise<ApiSearchProposalsResponseType> => {
  const limit = PROPOSALS_LISTING_LIMIT;
  const skip = page * limit;

  const response = await OrganisationApiService.getOrganisationProposals(
    organisationId,
    seed,
    limit,
    skip
  );

  return response;
};

export const getVotes = async (
  organisationId: string,
  seed: ?number = null,
  page: number = 0
): Promise<ApiOrganisationVotesResponseType> => {
  const limit = PROPOSALS_LISTING_LIMIT;
  const skip = page * limit;

  const response = await OrganisationApiService.getOrganisationVotes(
    organisationId,
    seed,
    limit,
    skip
  );
  const { results } = response;

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
};

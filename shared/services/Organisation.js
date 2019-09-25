// @flow
import { OrganisationApiService } from 'Shared/api/OrganisationApiService';
import { Logger } from 'Shared/services/Logger';
import { type ApiSearchOrganisationsResponseType } from 'Shared/types/api';

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

export const getProposals = async (organisationId: string) => {
  try {
    const { results } = await OrganisationApiService.getOrganisationProposals(
      organisationId
    );

    if (results.length > 0) {
      return results;
    }

    return [];
  } catch (error) {
    Logger.logError(Error(error));
    return [];
  }
};

export const getVotes = async (organisationId: string) => {
  try {
    const { results } = await OrganisationApiService.getOrganisationVotes(
      organisationId
    );

    if (results.length > 0) {
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

      return organisationVotes;
    }

    return [];
  } catch (error) {
    Logger.logError(Error(error));
    return [];
  }
};

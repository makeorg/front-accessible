// @flow
import { OrganisationService } from 'Shared/api/OrganisationService';
import { Logger } from 'Shared/services/Logger';

export const getOrganisationBySlug = async (slug: string) => {
  try {
    const response = await OrganisationService.getOrganisations(slug);
    const organisation = response.results.find(result => result.slug === slug);

    if (!organisation) {
      return null;
    }

    return organisation;
  } catch (error) {
    Logger.logError('getOrganisationBySlug error', error);
    return null;
  }
};

export const getProposals = async (organisationId: string) => {
  try {
    const { results } = await OrganisationService.getOrganisationProposals(
      organisationId
    );

    if (results.length > 0) {
      return results;
    }

    return [];
  } catch (error) {
    Logger.logError('getOrganisationProposals error', error);
    return [];
  }
};

export const getVotes = async (organisationId: string) => {
  try {
    const { results } = await OrganisationService.getOrganisationVotes(
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
    Logger.logError('getOrganisationVotes error', error);
    return [];
  }
};

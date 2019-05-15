// @flow
import React, { useState, useEffect } from 'react';
import * as OrganisationService from 'Shared/services/Organisation';
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { i18n } from 'Shared/i18n';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { OrganisationProposalsPlaceholder } from '../Placeholders/Proposals';

type Props = {
  organisation: TypeOrganisation,
};

const OrganisationProposalsPage = (props: Props) => {
  const [proposals, setProposals] = useState<TypeProposal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { organisation } = props;
  const proposalsLength = proposals.length;
  const renderProposals = !!proposalsLength && !isLoading;
  const renderPlaceholder = !proposalsLength && !isLoading;

  useEffect(() => {
    const fetchProposals = async () => {
      const loadedProposals: TypeProposal[] = await OrganisationService.getProposals(
        organisation.organisationId
      );

      setProposals(loadedProposals);
      setIsLoading(false);
    };

    fetchProposals();
  }, [organisation]);

  return (
    <CenterColumnStyle>
      <ProfileContentHeaderStyle>
        <SecondLevelTitleStyle>
          {i18n.t('organisation.proposals.title', {
            name: organisation.organisationName,
          })}
        </SecondLevelTitleStyle>
        <ProfileTitleSeparatorStyle />
      </ProfileContentHeaderStyle>
      {isLoading && <Spinner />}
      {renderProposals &&
        proposals.map((proposal, index) => (
          <ProposalCardWithQuestion
            key={proposal.id}
            proposal={proposal}
            position={index + 1}
            size={proposalsLength}
          />
        ))}
      {renderPlaceholder && (
        <OrganisationProposalsPlaceholder
          name={organisation.organisationName}
        />
      )}
    </CenterColumnStyle>
  );
};

// default export needed for loadable component
export default OrganisationProposalsPage; // eslint-disable-line import/no-default-export

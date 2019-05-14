// @flow
import React, { useState, useEffect } from 'react';
import * as OrganisationService from 'Shared/services/Organisation';
import { type Organisation as TypeOrganisation } from 'Shared/types/partners';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { i18n } from 'Shared/i18n';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';

type Props = {
  organisation: TypeOrganisation,
};

const OrganisationProposalsPage = (props: Props) => {
  const [proposals, setProposals] = useState<TypeProposal[]>([]);
  const { organisation } = props;

  const fetchProposals = async () => {
    const loadedProposals: TypeProposal[] = await OrganisationService.getProposals(
      organisation.organisationId
    );
    setProposals(loadedProposals);
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  const proposalsLength = proposals.length;

  if (!proposalsLength) {
    return null;
  }

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
      {proposals &&
        proposals.map((proposal, index) => (
          <ProposalCardTagged
            proposal={proposal}
            position={index + 1}
            size={proposalsLength}
          />
        ))}
    </CenterColumnStyle>
  );
};

// default export needed for loadable component
export default OrganisationProposalsPage; // eslint-disable-line import/no-default-export

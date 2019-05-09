// @flow
import * as React from 'react';
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

type State = {
  proposals: TypeProposal[],
};

class OrganisationProposalsPage extends React.Component<Props, State> {
  state = {
    proposals: [],
  };

  async componentDidMount() {
    this.loadOrganisationVotes();
  }

  loadOrganisationVotes = async () => {
    const { organisation } = this.props;

    const proposals = await OrganisationService.getProposals(
      organisation.organisationId
    );

    this.setState({
      proposals,
    });
  };

  render() {
    const { organisation } = this.props;
    const { proposals } = this.state;
    const proposalsLength = proposals.length;
    if (proposalsLength > 0) {
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
                question={proposal.question}
                position={index + 1}
                size={proposalsLength}
              />
            ))}
        </CenterColumnStyle>
      );
    }

    return null;
  }
}

// default export needed for loadable component
export default OrganisationProposalsPage; // eslint-disable-line import/no-default-export

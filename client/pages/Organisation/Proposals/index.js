// @flow
import * as React from 'react';
import * as OrganisationService from 'Shared/services/Organisation';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { i18n } from 'Shared/i18n';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';

type Props = {
  organisationName: string,
  organisationId: string,
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
    const { organisationId } = this.props;

    const proposals = await OrganisationService.getProposals(organisationId);

    this.setState({
      proposals,
    });
  };

  render() {
    const { organisationName } = this.props;
    const { proposals } = this.state;

    if (proposals.length > 0) {
      return (
        <CenterColumnStyle>
          <ProfileContentHeaderStyle>
            <SecondLevelTitleStyle>
              {i18n.t('organisation.proposals.title', {
                name: organisationName,
              })}
            </SecondLevelTitleStyle>
            <ProfileTitleSeparatorStyle />
          </ProfileContentHeaderStyle>
          {proposals && proposals.map(proposal => <p>{proposal.content}</p>)}
        </CenterColumnStyle>
      );
    }

    return null;
  }
}

// default export needed for loadable component
export default OrganisationProposalsPage; // eslint-disable-line import/no-default-export

// @flow
import * as React from 'react';
import * as OrganisationService from 'Shared/services/Organisation';
import {
  type OrganisationVote as TypeOrganisationVote,
  type Organisation as TypeOrganisation,
} from 'Shared/types/partners';
import { i18n } from 'Shared/i18n';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { ProfileVoteCard } from 'Client/features/proposal/ProfileVoteCard';

type Props = {
  organisation: TypeOrganisation,
};

type State = {
  votes: TypeOrganisationVote[],
};

class OrganisationVotesPage extends React.Component<Props, State> {
  state = {
    votes: [],
  };

  async componentDidMount() {
    this.loadOrganisationVotes();
  }

  loadOrganisationVotes = async () => {
    const { organisation } = this.props;

    const votes = await OrganisationService.getVotes(
      organisation.organisationId
    );

    this.setState({
      votes,
    });
  };

  render() {
    const { organisation } = this.props;
    const { votes } = this.state;

    if (votes.length > 0) {
      return (
        <CenterColumnStyle>
          <ProfileContentHeaderStyle>
            <SecondLevelTitleStyle>
              {i18n.t('organisation.votes.title', {
                name: organisation.organisationName,
              })}
            </SecondLevelTitleStyle>
            <ProfileTitleSeparatorStyle />
          </ProfileContentHeaderStyle>
          {votes &&
            votes.map(vote => (
              <ProfileVoteCard
                key={`organisation_votes_${vote.proposal.id}`}
                voteKey={vote.vote}
                proposal={vote.proposal}
                organisation={organisation}
              />
            ))}
        </CenterColumnStyle>
      );
    }

    return null;
  }
}

// default export needed for loadable component
export default OrganisationVotesPage; // eslint-disable-line import/no-default-export

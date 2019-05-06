// @flow
import * as React from 'react';
import * as OrganisationService from 'Shared/services/Organisation';
import { type OrganisationVote as TypeOrganisationVote } from 'Shared/types/partners';
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
    const { organisationId } = this.props;

    const votes = await OrganisationService.getVotes(organisationId);

    this.setState({
      votes,
    });
  };

  render() {
    const { organisationName } = this.props;
    const { votes } = this.state;

    if (votes.length > 0) {
      return (
        <CenterColumnStyle>
          <ProfileContentHeaderStyle>
            <SecondLevelTitleStyle>
              {i18n.t('organisation.votes.title', { name: organisationName })}
            </SecondLevelTitleStyle>
            <ProfileTitleSeparatorStyle />
          </ProfileContentHeaderStyle>
          {votes && votes.map(vote => <h2>{vote.vote}</h2>)}
        </CenterColumnStyle>
      );
    }

    return null;
  }
}

// default export needed for loadable component
export default OrganisationVotesPage; // eslint-disable-line import/no-default-export

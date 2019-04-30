/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { type match as TypeMatch } from 'react-router';
import { i18n } from 'Shared/i18n';
import * as UserService from 'Shared/services/User';
import { type User as TypeUser } from 'Shared/types/user';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ProposalsPlaceholder } from 'Client/features/profile/Placeholders/Proposals';
import { ProfileProposalCard } from 'Client/features/proposal/ProfileProposalCard/ProfileProposalCard';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';

type Props = {
  user: TypeUser,
  match: TypeMatch,
};

type State = {
  proposals: TypeProposal[],
  isLoading: boolean,
};
class ProfileProposals extends React.Component<Props, State> {
  state = {
    proposals: [],
    isLoading: true,
  };

  async componentDidMount() {
    this.loadProposals();
  }

  loadProposals = async () => {
    const { user } = this.props;

    const proposals = await UserService.myProposals(user.userId);

    this.setState({
      proposals,
      isLoading: false,
    });
  };

  render() {
    const { user, match } = this.props;
    const { proposals, isLoading } = this.state;
    const proposalsLength = proposals.length;

    if (!user) {
      return <Redirect to={`/${match.params.countryLanguage}`} />;
    }

    return (
      <CenterColumnStyle>
        <ProfileContentHeaderStyle>
          <SecondLevelTitleStyle>
            {i18n.t('profile.proposals.title')}
          </SecondLevelTitleStyle>
          <ProfileTitleSeparatorStyle />
        </ProfileContentHeaderStyle>
        {isLoading && <Spinner />}
        {proposalsLength ? (
          proposals.map((proposal, index) => (
            <ProfileProposalCard
              key={proposal.id}
              proposal={proposal}
              size={proposalsLength}
              position={index}
              withStatus
            />
          ))
        ) : (
          <ProposalsPlaceholder />
        )}
      </CenterColumnStyle>
    );
  }
}

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);

  return { user };
};

export const ProfileProposalsPage = connect(mapStateToProps)(ProfileProposals);

// default export needed for loadable component
export default ProfileProposalsPage; // eslint-disable-line import/no-default-export

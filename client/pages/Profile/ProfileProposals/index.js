/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { type match as TypeMatch } from 'react-router';
import * as UserService from 'Shared/services/User';
import { type User as TypeUser } from 'Shared/types/user';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { i18n } from 'Shared/i18n';
import { ProposalType } from 'Shared/types/proposal';
import { ProposalsPlaceholder } from 'Client/features/profile/Placeholders/Proposals';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from '../Styled';

type Props = {
  user?: TypeUser,
  match: TypeMatch,
};

type State = {
  proposals: ProposalType[],
};
class ProfileProposals extends React.Component<Props, State> {
  state = {
    proposals: [],
  };

  async componentDidMount() {
    this.loadProposals();
  }

  loadProposals = async () => {
    const { user } = this.props;

    const { results } = await UserService.myProposals(user.userId);
    this.setState({
      proposals: results,
    });
  };

  render() {
    const { user, match } = this.props;
    const { proposals } = this.state;
    const hasProposals = proposals.length;
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
        {hasProposals ? (
          proposals.map(proposal => <div>{proposal.content}</div>)
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

// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { type match as TypeMatch } from 'react-router';
import { i18n } from 'Shared/i18n';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import * as UserService from 'Shared/services/User';
import { type User as TypeUser } from 'Shared/types/user';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { FavouritesPlaceholder } from 'Client/features/profile/Placeholders/Favourites';
import { ProfileProposalCard } from 'Client/features/proposal/ProfileProposalCard/ProfileProposalCard';
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

class ProfileFavourites extends React.Component<Props, State> {
  state = {
    proposals: [],
    isLoading: true,
  };

  async componentDidMount() {
    this.loadProposals();
  }

  loadProposals = async () => {
    const { user } = this.props;

    const proposals = await UserService.myFavourites(user.userId);

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
            {i18n.t('profile.favourites.title')}
          </SecondLevelTitleStyle>
          <ProfileTitleSeparatorStyle />
        </ProfileContentHeaderStyle>
        {isLoading && <Spinner />}
        {proposalsLength ? (
          proposals.map((proposal, index) => (
            <React.Fragment>
              <ProfileProposalCard
                key={proposal.id}
                proposal={proposal}
                size={proposalsLength}
                position={index}
              />
            </React.Fragment>
          ))
        ) : (
          <FavouritesPlaceholder />
        )}
      </CenterColumnStyle>
    );
  }
}
const mapStateToProps = state => {
  const { user } = selectAuthentification(state);

  return { user };
};

export const ProfileFavouritesPage = connect(mapStateToProps)(
  ProfileFavourites
);

// default export needed for loadable component
export default ProfileFavouritesPage; // eslint-disable-line import/no-default-export

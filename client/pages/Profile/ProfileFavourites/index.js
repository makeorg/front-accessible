// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { type match as TypeMatch } from 'react-router';
import { i18n } from 'Shared/i18n';
import * as UserService from 'Shared/services/User';
import { type User as TypeUser } from 'Shared/types/user';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { FavouritesPlaceholder } from 'Client/features/profile/Placeholders/Favourites';
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

class ProfileFavourites extends React.Component<Props, State> {
  state = {
    proposals: [],
  };

  async componentDidMount() {
    this.loadProposals();
  }

  loadProposals = async () => {
    const { user } = this.props;

    const { results } = await UserService.myFavourites(user.userId);
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
            {i18n.t('profile.favourites.title')}
          </SecondLevelTitleStyle>
          <ProfileTitleSeparatorStyle />
        </ProfileContentHeaderStyle>
        {hasProposals ? (
          proposals.map(proposal => <div>{proposal.content}</div>)
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

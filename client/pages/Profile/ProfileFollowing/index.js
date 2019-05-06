/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { type match as TypeMatch } from 'react-router';
import { type User as TypeUser } from 'Shared/types/user';
import { i18n } from 'Shared/i18n';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { FollowingPlaceholder } from 'Client/features/profile/Placeholders/Following';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';

type Props = {
  user?: TypeUser,
  match: TypeMatch,
};

class ProfileFollowing extends React.Component<Props> {
  render() {
    const { user, match } = this.props;

    if (!user) {
      return <Redirect to={`/${match.params.countryLanguage}`} />;
    }

    const hasFollowed = user.followedUsers.length;

    return (
      <CenterColumnStyle>
        <ProfileContentHeaderStyle>
          <SecondLevelTitleStyle>
            {i18n.t('profile.following.title')}
          </SecondLevelTitleStyle>
          <ProfileTitleSeparatorStyle />
        </ProfileContentHeaderStyle>
        {hasFollowed ? (
          user.followedUsers.map(followed => <div>{followed}</div>)
        ) : (
          <FollowingPlaceholder />
        )}
      </CenterColumnStyle>
    );
  }
}

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);
  return { user };
};

export const ProfileFollowingPage = connect(mapStateToProps)(ProfileFollowing);

// default export needed for loadable component
export default ProfileFollowingPage; // eslint-disable-line import/no-default-export

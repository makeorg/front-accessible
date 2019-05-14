/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { type User as TypeUser } from 'Shared/types/user';
import { i18n } from 'Shared/i18n';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { FRONT_LEGACY_ROOT } from 'Shared/constants/url';
import { ProfileFollowingPlaceholder } from 'Client/pages/Profile/Placeholders/Following';

type Props = {
  user?: TypeUser,
};

const ProfileFollowing = (props: Props) => {
  const { user } = props;

  if (!user) {
    window.location = FRONT_LEGACY_ROOT;
    return null;
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
        <ProfileFollowingPlaceholder />
      )}
    </CenterColumnStyle>
  );
};

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);
  return { user };
};

export const ProfileFollowingPage = connect(mapStateToProps)(ProfileFollowing);

// default export needed for loadable component
export default ProfileFollowingPage; // eslint-disable-line import/no-default-export

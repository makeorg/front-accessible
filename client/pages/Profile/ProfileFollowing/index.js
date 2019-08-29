// @flow
import React from 'react';
import { type TypeUser } from 'Shared/types/user';
import { i18n } from 'Shared/i18n';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { ProfileFollowingPlaceholder } from 'Client/pages/Profile/Placeholders/Following';

type Props = {
  user: TypeUser,
};

const ProfileFollowingPage = (props: Props) => {
  const { user } = props;

  const hasFollowed = user.followedUsers.length;

  return (
    <CenterColumnStyle>
      <ProfileContentHeaderStyle>
        <ThirdLevelTitleStyle as="h2">
          {i18n.t('profile.following.title')}
        </ThirdLevelTitleStyle>
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

// default export needed for loadable component
export default ProfileFollowingPage; // eslint-disable-line import/no-default-export

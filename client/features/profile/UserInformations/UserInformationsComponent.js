/* @flow */
import React from 'react';
import { type User } from 'Shared/types/user';
import { i18n } from 'Shared/i18n';
import { getAgeFromDateOfBrth } from 'Shared/helpers/date';
import { Avatar } from 'Client/ui/Avatar';
import { SvgMapMarker, SvgSignOut } from 'Client/ui/Svg/elements';
import {
  IconWrapperStyle,
  GreyButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import {
  UserAvatarStyle,
  UserContentWrapperStyle,
  UserTitleStyle,
  UserContentStyle,
  UserDescriptionStyle,
  UserSeparatorStyle,
  UserAvatarLayoutStyle,
} from '../Styled/UserInformations';

type Props = {
  user: User,
  handleLogout: () => void,
};

export const UserInformationsComponent = (props: Props) => {
  const { user, handleLogout } = props;
  const { profile } = user;

  return (
    <React.Fragment>
      <UserAvatarLayoutStyle>
        <UserAvatarStyle>
          <Avatar avatarSize={160}>
            {profile.avatarUrl && (
              <img src={profile.avatarUrl} alt={user.firstName} aria-hidden />
            )}
          </Avatar>
        </UserAvatarStyle>
        <UserContentWrapperStyle>
          <UserTitleStyle>{user.firstName}</UserTitleStyle>
          {profile.postalCode && (
            <UserContentStyle>
              <SvgMapMarker />
              {profile.postalCode}
            </UserContentStyle>
          )}
          {profile.dateOfBirth && (
            <UserContentStyle>
              {i18n.t('profile.common.age', {
                age: getAgeFromDateOfBrth(profile.dateOfBirth),
              })}
            </UserContentStyle>
          )}
          {profile.profession && (
            <UserContentStyle>{profile.profession}</UserContentStyle>
          )}
        </UserContentWrapperStyle>
      </UserAvatarLayoutStyle>
      {profile.description && (
        <React.Fragment>
          <UserSeparatorStyle aria-hidden />
          <UserDescriptionStyle>{profile.description}</UserDescriptionStyle>
          <UserSeparatorStyle aria-hidden />
        </React.Fragment>
      )}
      <GreyButtonStyle onClick={handleLogout}>
        <IconWrapperStyle aria-hidden>
          <SvgSignOut />
        </IconWrapperStyle>
        {i18n.t('common.disconnexion_label')}
      </GreyButtonStyle>
    </React.Fragment>
  );
};

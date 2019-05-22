/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { logout } from 'Shared/store/actions/authentification';
import { type User } from 'Shared/types/user';
import { i18n } from 'Shared/i18n';
import { getAgeFromDateOfBrth } from 'Shared/helpers/date';
import { Avatar } from 'Client/ui/Avatar';
import { SvgMapMarker, SvgSignOut } from 'Client/ui/Svg/elements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements/CheckedSymbol';
import { TextColors } from 'Client/app/assets/vars/Colors';
import {
  ProfileAvatarStyle,
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileContentStyle,
  ProfileSeparatorStyle,
  ProfileAvatarLayoutStyle,
  ProfileInformationButtonStyle,
  ProfileNavigationStyle,
} from 'Client/ui/Elements/ProfileElements';
import { UserDescription } from './Description';

type Props = {
  user: User,
  navigationBar: React.Element<any>,
  handleLogout: () => void,
};

type State = {
  avatarSize: number,
};

class UserInformationsHandler extends React.Component<Props, State> {
  state = {
    avatarSize: 60,
  };

  componentDidMount() {
    const isMobile = window.matchMedia(
      `(max-width: ${intToPx(Breakpoints.Tablet)}`
    ).matches;

    if (!isMobile) {
      this.setState({ avatarSize: 160 });
    }
  }

  render() {
    const { avatarSize } = this.state;
    const { user, navigationBar, handleLogout } = this.props;
    const { profile } = user;

    return (
      <React.Fragment>
        <ProfileAvatarLayoutStyle>
          <ProfileAvatarStyle>
            <Avatar avatarSize={avatarSize}>
              {profile.avatarUrl && <img src={profile.avatarUrl} alt="" />}
            </Avatar>
          </ProfileAvatarStyle>
          {user.isOrganisation && (
            <ProfileContentWrapperStyle>
              <ProfileTitleStyle>
                {user.organisationName}
                &nbsp;
                <SvgCheckedSymbol
                  style={{ fontSize: '14px', fill: TextColors.Blue }}
                />
              </ProfileTitleStyle>
            </ProfileContentWrapperStyle>
          )}
          <ProfileContentWrapperStyle>
            <ProfileTitleStyle>{user.firstName}</ProfileTitleStyle>
            <ProfileContentStyle>{user.email}</ProfileContentStyle>
            {profile.postalCode && (
              <ProfileContentStyle>
                <SvgMapMarker style={{ marginRight: '3px' }} />
                {profile.postalCode}
              </ProfileContentStyle>
            )}
            {profile.dateOfBirth && (
              <ProfileContentStyle>
                {i18n.t('profile.common.age', {
                  age: getAgeFromDateOfBrth(profile.dateOfBirth),
                })}
              </ProfileContentStyle>
            )}
            {profile.profession && (
              <ProfileContentStyle>{profile.profession}</ProfileContentStyle>
            )}
          </ProfileContentWrapperStyle>
        </ProfileAvatarLayoutStyle>
        {profile.description && (
          <React.Fragment>
            <ProfileSeparatorStyle aria-hidden />
            <UserDescription description={profile.description} />
          </React.Fragment>
        )}
        <ProfileNavigationStyle>
          {navigationBar}
          <ProfileInformationButtonStyle onClick={handleLogout}>
            <IconWrapperStyle aria-hidden>
              <SvgSignOut />
            </IconWrapperStyle>
            {i18n.t('profile.common.log_out')}
          </ProfileInformationButtonStyle>
        </ProfileNavigationStyle>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export const UserInformationsContainer = connect(
  null,
  mapDispatchToProps
)(UserInformationsHandler);

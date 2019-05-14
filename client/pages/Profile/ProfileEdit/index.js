/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { type match as TypeMatch } from 'react-router';
import { type User } from 'Shared/types/user';
import { UpdateInformations } from 'Client/features/profile/UpdateInformations';
import { UpdatePassword } from 'Client/features/profile/UpdatePassword';
import { UpdateNewsletter } from 'Client/features/profile/UpdateNewsletter';
import { DeleteAccount } from 'Client/features/profile/DeleteAccount';
import { MetaTags } from 'Client/app/MetaTags';
import { UserInformations } from 'Client/features/profile/UserInformations';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { logout } from 'Shared/store/actions/authentification';
import { TabNavStyle, TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import { GoToProfileLink } from 'Client/features/profile/UserInformations/Navigation';
import { ROUTE_PROFILE_EDIT, getRouteProfile } from 'Shared/routes';
import { i18n } from 'Shared/i18n';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
} from 'Client/ui/Elements/ProfileElements';
import { FRONT_LEGACY_ROOT } from 'Shared/constants/url';

type Props = {
  user: User,
  handleLogout: () => void,
  match: TypeMatch,
};

const ProfileEdit = (props: Props) => {
  const { user, handleLogout, match } = props;
  const { countryLanguage } = match.params;
  const editProfileLink = ROUTE_PROFILE_EDIT.replace(
    ':countryLanguage',
    countryLanguage
  );
  const NavigationBar = (
    <GoToProfileLink link={getRouteProfile(countryLanguage)} />
  );

  if (!user) {
    window.location = FRONT_LEGACY_ROOT;
    return null;
  }

  return (
    <ProfileWrapperStyle>
      <MetaTags />
      <ProfileHeaderStyle aria-hidden />
      <ProfilePageContentWrapperStyle>
        <ProfilePageSidebarStyle as="aside">
          <UserInformations user={user} navigationBar={NavigationBar} />
        </ProfilePageSidebarStyle>
        <ProfilePageContentStyle>
          <TabNavStyle aria-label={i18n.t('common.secondary_nav')}>
            <TabListStyle>
              <TabStyle selected>
                <Link to={editProfileLink} aria-selected>
                  {i18n.t('profile.tabs.manage_account')}
                </Link>
              </TabStyle>
            </TabListStyle>
          </TabNavStyle>
          <UpdateInformations user={user} />
          <UpdatePassword userId={user.userId} hasPassword={user.hasPassword} />
          <UpdateNewsletter profile={user.profile} />
          <DeleteAccount user={user} handleLogout={handleLogout} />
        </ProfilePageContentStyle>
      </ProfilePageContentWrapperStyle>
    </ProfileWrapperStyle>
  );
};

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);
  return { user };
};

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

const ProfileEditPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);

// default export needed for loadable component
export default ProfileEditPage; // eslint-disable-line import/no-default-export

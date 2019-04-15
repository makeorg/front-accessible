/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
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
import { ROUTE_PROFILE_EDIT } from 'Shared/routes';
import { i18n } from 'Shared/i18n';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
} from '../Styled';

type Props = {
  user: User,
  handleLogout: () => void,
  match: TypeMatch,
};

export class ProfileEdit extends React.Component<Props> {
  render() {
    const { user, handleLogout, match } = this.props;
    const { countryLanguage } = match.params;

    const editProfileLink = ROUTE_PROFILE_EDIT.replace(
      ':countryLanguage',
      countryLanguage
    );

    if (!user) {
      return <Redirect to={`/${countryLanguage}`} />;
    }

    return (
      <ProfileWrapperStyle>
        <MetaTags />
        <ProfileHeaderStyle aria-hidden />
        <ProfilePageContentWrapperStyle>
          <ProfilePageSidebarStyle as="aside">
            <UserInformations user={user} handleLogout={handleLogout} />
          </ProfilePageSidebarStyle>
          <ProfilePageContentStyle>
            <TabNavStyle aria-label={i18n.t('profile.tabs.label')}>
              <TabListStyle>
                <TabStyle selected>
                  <Link to={editProfileLink} aria-selected>
                    {i18n.t('profile.tabs.manage_account')}
                  </Link>
                </TabStyle>
              </TabListStyle>
            </TabNavStyle>
            <UpdateInformations user={user} />
            <UpdateNewsletter profile={user.profile} />
            <UpdatePassword
              userId={user.userId}
              hasPassword={user.hasPassword}
            />
            <DeleteAccount userId={user.userId} handleLogout={handleLogout} />
          </ProfilePageContentStyle>
        </ProfilePageContentWrapperStyle>
      </ProfileWrapperStyle>
    );
  }
}

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);
  return { user };
};

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export const ProfileEditPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);

// default export needed for loadable component
export default ProfileEditPage; // eslint-disable-line import/no-default-export

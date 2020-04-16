/* @flow */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect, type match as TypeMatch, generatePath } from 'react-router';
import { UpdateInformations } from 'Client/features/profile/UpdateInformations';
import { UpdatePassword } from 'Client/features/profile/UpdatePassword';
import { UpdateNewsletter } from 'Client/features/profile/UpdateNewsletter';
import { DeleteAccount } from 'Client/features/profile/DeleteAccount';
import { MetaTags } from 'Client/app/MetaTags';
import { UserInformations } from 'Client/features/profile/UserInformations';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { TabNavStyle, TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import { GoToProfileLink } from 'Client/features/profile/UserInformations/Navigation';
import { ROUTE_PROFILE_EDIT, getRouteProfile } from 'Shared/routes';
import { type StateRoot } from 'Shared/store/types';
import { i18n } from 'Shared/i18n';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
  ProfilePageSidebarWrapperStyle,
} from 'Client/ui/Elements/ProfileElements';

type Props = {
  match: TypeMatch,
};

const ProfileEditPage = ({ match }: Props) => {
  const { user } = useSelector((state: StateRoot) =>
    selectAuthentification(state)
  );
  const { country, language } = match.params;
  const editProfileLink = generatePath(ROUTE_PROFILE_EDIT, {
    country,
    language,
  });
  if (!user) {
    return <Redirect to="/" />;
  }

  const NavigationBar = (
    <GoToProfileLink link={getRouteProfile(country, language)} />
  );

  return (
    <ProfileWrapperStyle>
      <MetaTags title={i18n.t('meta.profile.edit.title')} />
      <ProfileHeaderStyle aria-hidden />
      <ProfilePageContentWrapperStyle>
        <ProfilePageSidebarWrapperStyle>
          <ProfilePageSidebarStyle>
            <UserInformations user={user} navigationBar={NavigationBar} />
          </ProfilePageSidebarStyle>
        </ProfilePageSidebarWrapperStyle>
        <ProfilePageContentStyle>
          <TabNavStyle aria-label={i18n.t('common.secondary_nav')}>
            <TabListStyle as="div">
              <TabStyle as="div" isSelected>
                <Link to={editProfileLink}>
                  {i18n.t('profile.tabs.manage_account')}
                </Link>
              </TabStyle>
            </TabListStyle>
          </TabNavStyle>
          <UpdateInformations user={user} />
          <UpdatePassword userId={user.userId} hasPassword={user.hasPassword} />
          <UpdateNewsletter
            userId={user.userId}
            userType={user.userType}
            profile={user.profile}
          />
          <DeleteAccount user={user} />
        </ProfilePageContentStyle>
      </ProfilePageContentWrapperStyle>
    </ProfileWrapperStyle>
  );
};

// default export needed for loadable component
export default ProfileEditPage; // eslint-disable-line import/no-default-export

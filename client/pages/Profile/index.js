// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import {
  type Location as TypeLocation,
  type match as TypeMatch,
} from 'react-router';
import loadable from '@loadable/component';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { MetaTags } from 'Client/app/MetaTags';
import { UserInformations } from 'Client/features/profile/UserInformations';
import { EditProfileLink } from 'Client/features/profile/UserInformations/Navigation';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import { TabNavStyle, TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import {
  isProfileProposals as getIsProfileProposals,
  isProfileFavourites as getIsProfileFavourites,
  ROUTE_PROFILE_PROPOSALS,
  ROUTE_PROFILE_FAVOURITES,
  ROUTE_PROFILE_FOLLOWING,
  getRouteProfileProposals,
  getRouteProfileFavourites,
  getRouteProfileEdit,
  getRouteProfileOpinions,
} from 'Shared/routes';
import {
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
  ProfileTabIconStyle,
  ProfilePageSidebarWrapperStyle,
} from 'Client/ui/Elements/ProfileElements';
import { UserProfileSkipLinks } from 'Client/app/SkipLinks/Profile';
import { TYPE_PERSONALITY } from 'Shared/constants/user';
import { getHomeLink } from 'Shared/helpers/url';

const ProfileProposalsPage = loadable(() => import('./Proposals'));
const ProfileFavouritesPage = loadable(() => import('./Favourites'));
const ProfileFollowingPage = loadable(() => import('./Following'));

type Props = {
  match: TypeMatch,
  location: TypeLocation,
};

const ProfilePage = ({ match, location }: Props) => {
  const { user } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );
  const { country } = match.params;
  const isPersonality = user && user.userType === TYPE_PERSONALITY;

  const profileProposalsLink = getRouteProfileProposals(country);
  const profileFavouritesLink = getRouteProfileFavourites(country);
  const profileOpinions = getRouteProfileOpinions(country);
  const isProfileProposalsActive = getIsProfileProposals(location.pathname);
  const isProfileFavouritesActive = getIsProfileFavourites(location.pathname);

  if (!user) {
    return <Redirect to={getHomeLink(country)} />;
  }

  if (isPersonality) {
    return <Redirect to={profileOpinions} />;
  }

  const NavigationBar = <EditProfileLink link={getRouteProfileEdit(country)} />;

  return (
    <>
      <UserProfileSkipLinks />
      <MetaTags />
      <ProfileHeaderStyle />
      <ProfilePageContentWrapperStyle>
        <ProfilePageSidebarWrapperStyle id="sidebar_content">
          <ProfilePageSidebarStyle>
            <UserInformations user={user} navigationBar={NavigationBar} />
          </ProfilePageSidebarStyle>
        </ProfilePageSidebarWrapperStyle>
        <ProfilePageContentStyle>
          <TabNavStyle
            aria-label={i18n.t('common.secondary_nav')}
            id="profile_nav"
          >
            <TabListStyle>
              <TabStyle isSelected={isProfileProposalsActive}>
                <Link
                  to={profileProposalsLink}
                  aria-current={isProfileProposalsActive}
                >
                  {i18n.t('profile.tabs.proposals')}
                </Link>
              </TabStyle>
              <TabStyle isSelected={isProfileFavouritesActive}>
                <Link
                  to={profileFavouritesLink}
                  aria-current={isProfileFavouritesActive}
                  className="inline"
                >
                  {i18n.t('profile.tabs.favourites')}
                  <ProfileTabIconStyle aria-hidden focusable="false" />
                </Link>
              </TabStyle>
            </TabListStyle>
          </TabNavStyle>
          <Switch>
            <Route
              path={ROUTE_PROFILE_PROPOSALS}
              exact
              component={() => <ProfileProposalsPage user={user} />}
            />
            <Route
              path={ROUTE_PROFILE_FAVOURITES}
              exact
              component={() => <ProfileFavouritesPage user={user} />}
            />
            <Route
              path={ROUTE_PROFILE_FOLLOWING}
              exact
              component={() => <ProfileFollowingPage user={user} />}
            />
          </Switch>
        </ProfilePageContentStyle>
      </ProfilePageContentWrapperStyle>
    </>
  );
};

// default export needed for loadable component
export default ProfilePage; // eslint-disable-line import/no-default-export

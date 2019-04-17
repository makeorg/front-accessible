// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Switch, Route, Link } from 'react-router-dom';
import {
  matchPath,
  type Location as TypeLocation,
  type match as TypeMatch,
} from 'react-router';
import loadable from '@loadable/component';
import { i18n } from 'Shared/i18n';
import { type User as TypeUser } from 'Shared/types/user';
import { SvgLike } from 'Client/ui/Svg/elements';
import { MetaTags } from 'Client/app/MetaTags';
import { UserInformations } from 'Client/features/profile/UserInformations';
import { EditProfileLink } from 'Client/features/profile/UserInformations/Navigation';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { TabNavStyle, TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import {
  ROUTE_PROFILE_PROPOSALS,
  ROUTE_PROFILE_FAVORITES,
  ROUTE_PROFILE_FOLLOWING,
  getRouteProfileProposals,
  getRouteProfileFavorites,
  getRouteProfileFollowing,
  getRouteProfileEdit,
} from 'Shared/routes';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
} from './Styled';

const ProfileProposalsPage = loadable(() =>
  import('Client/pages/Profile/ProfileProposals')
);
const ProfileFavoritesPage = loadable(() =>
  import('Client/pages/Profile/ProfileFavorites')
);
const ProfileFollowingPage = loadable(() =>
  import('Client/pages/Profile/ProfileFollowing')
);

type Props = {
  user: TypeUser,
  match: TypeMatch,
  location: TypeLocation,
};

const Profile = (props: Props) => {
  const { user, match, location } = props;
  const { countryLanguage } = match.params;
  if (!user) {
    return <Redirect to={`/${countryLanguage}`} />;
  }

  const profileProposalsLink = getRouteProfileProposals(countryLanguage);
  const profileFavoritesLink = getRouteProfileFavorites(countryLanguage);
  const profileFollowingLink = getRouteProfileFollowing(countryLanguage);

  const isProfileProposalsActive = !!matchPath(
    location.pathname,
    ROUTE_PROFILE_PROPOSALS
  );
  const isProfileFavoritesActive = !!matchPath(
    location.pathname,
    ROUTE_PROFILE_FAVORITES
  );
  const isProfileFollowingActive = !!matchPath(
    location.pathname,
    ROUTE_PROFILE_FOLLOWING
  );

  const NavigationBar = (
    <EditProfileLink link={getRouteProfileEdit(countryLanguage)} />
  );

  return (
    <ProfileWrapperStyle>
      <MetaTags />
      <ProfileHeaderStyle aria-hidden />
      <ProfilePageContentWrapperStyle>
        <ProfilePageSidebarStyle>
          <UserInformations user={user} navigationBar={NavigationBar} />
        </ProfilePageSidebarStyle>
        <ProfilePageContentStyle>
          <TabNavStyle aria-label={i18n.t('profile.tabs.label')}>
            <TabListStyle>
              <TabStyle selected={isProfileProposalsActive}>
                <Link
                  to={profileProposalsLink}
                  aria-selected={isProfileProposalsActive}
                >
                  {i18n.t('profile.tabs.proposals')}
                </Link>
              </TabStyle>
              <TabStyle selected={isProfileFavoritesActive}>
                <Link
                  to={profileFavoritesLink}
                  aria-selected={isProfileFavoritesActive}
                >
                  {i18n.t('profile.tabs.favorites')}
                  <SvgLike />
                </Link>
              </TabStyle>
              <TabStyle selected={isProfileFollowingActive}>
                <Link
                  to={profileFollowingLink}
                  aria-selected={isProfileFollowingActive}
                >
                  {i18n.t('profile.tabs.following')}
                </Link>
              </TabStyle>
            </TabListStyle>
          </TabNavStyle>
          <Switch>
            <Route
              path={ROUTE_PROFILE_PROPOSALS}
              exact
              component={ProfileProposalsPage}
            />
            <Route
              path={ROUTE_PROFILE_FAVORITES}
              exact
              component={ProfileFavoritesPage}
            />
            <Route
              path={ROUTE_PROFILE_FOLLOWING}
              exact
              component={ProfileFollowingPage}
            />
          </Switch>
        </ProfilePageContentStyle>
      </ProfilePageContentWrapperStyle>
    </ProfileWrapperStyle>
  );
};

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);
  return { user };
};

export const ProfilePage = connect(mapStateToProps)(Profile);

// default export needed for loadable component
export default ProfilePage; // eslint-disable-line import/no-default-export

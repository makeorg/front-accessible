// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import {
  matchPath,
  type Location as TypeLocation,
  type match as TypeMatch,
} from 'react-router';
import loadable from '@loadable/component';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { type TypeUser } from 'Shared/types/user';
import { UserInformations } from 'Client/features/profile/UserInformations';
import { EditProfileLink } from 'Client/features/profile/UserInformations/Navigation';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { TabNavStyle, TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import {
  ROUTE_PROFILE_PROPOSALS,
  ROUTE_PROFILE_FAVOURITES,
  ROUTE_PROFILE_FOLLOWING,
  getRouteProfileProposals,
  getRouteProfileFavourites,
  getRouteProfileEdit,
} from 'Shared/routes';
import { SvgLike } from 'Client/ui/Svg/elements';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
  ProfileTabIconStyle,
} from 'Client/ui/Elements/ProfileElements';
import { UserProfileSkipLinks } from 'Client/app/SkipLinks/Profile';

const ProfileProposalsPage = loadable(() =>
  import('Client/pages/Profile/Proposals')
);
const ProfileFavouritesPage = loadable(() =>
  import('Client/pages/Profile/ProfileFavourites')
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
  const { country, language } = match.params;
  const profileProposalsLink = getRouteProfileProposals(country, language);
  const profileFavouritesLink = getRouteProfileFavourites(country, language);

  const isProfileProposalsActive = !!matchPath(
    location.pathname,
    ROUTE_PROFILE_PROPOSALS
  );
  const isProfileFavouritesActive = !!matchPath(
    location.pathname,
    ROUTE_PROFILE_FAVOURITES
  );

  if (!user) {
    return <Redirect to="/" />;
  }

  const NavigationBar = (
    <EditProfileLink link={getRouteProfileEdit(country, language)} />
  );

  return (
    <ProfileWrapperStyle>
      <UserProfileSkipLinks />
      <MetaTags />
      <ProfileHeaderStyle aria-hidden />
      <ProfilePageContentWrapperStyle>
        <ProfilePageSidebarStyle id="sidebar_content">
          <UserInformations user={user} navigationBar={NavigationBar} />
        </ProfilePageSidebarStyle>
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
                >
                  {i18n.t('profile.tabs.favourites')}
                  <SvgLike aria-hidden style={ProfileTabIconStyle} />
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

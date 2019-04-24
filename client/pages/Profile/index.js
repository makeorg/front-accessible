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
import { MetaTags } from 'Client/app/MetaTags';
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
} from './Styled';

const ProfileProposalsPage = loadable(() =>
  import('Client/pages/Profile/ProfileProposals')
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
  const { countryLanguage } = match.params;
  if (!user) {
    return <Redirect to={`/${countryLanguage}`} />;
  }

  const profileProposalsLink = getRouteProfileProposals(countryLanguage);
  const profileFavouritesLink = getRouteProfileFavourites(countryLanguage);

  const isProfileProposalsActive = !!matchPath(
    location.pathname,
    ROUTE_PROFILE_PROPOSALS
  );
  const isProfileFavouritesActive = !!matchPath(
    location.pathname,
    ROUTE_PROFILE_FAVOURITES
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
          <TabNavStyle aria-label={i18n.t('common.secondary_nav')}>
            <TabListStyle>
              <TabStyle selected={isProfileProposalsActive}>
                <Link
                  to={profileProposalsLink}
                  aria-selected={isProfileProposalsActive}
                >
                  {i18n.t('profile.tabs.proposals')}
                </Link>
              </TabStyle>
              <TabStyle selected={isProfileFavouritesActive}>
                <Link
                  to={profileFavouritesLink}
                  aria-selected={isProfileFavouritesActive}
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
              component={ProfileProposalsPage}
            />
            <Route
              path={ROUTE_PROFILE_FAVOURITES}
              exact
              component={ProfileFavouritesPage}
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

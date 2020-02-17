// @flow
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { type match as TypeMatch, Redirect } from 'react-router';
import { type TypeUser } from 'Shared/types/user';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { MetaTags } from 'Client/app/MetaTags';
import { UserInformations } from 'Client/features/profile/UserInformations';
import { EditProfileLink } from 'Client/features/profile/UserInformations/Navigation';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { TabNavStyle, TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
  ProfilePageSidebarWrapperStyle,
} from 'Client/ui/Elements/ProfileElements';
import { UserProfileSkipLinks } from 'Client/app/SkipLinks/Profile';
import { Opinions } from 'Client/features/opinions';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { getPersonalityById } from 'Shared/services/Personality';
import { getRouteProfileEdit } from 'Shared/routes';

type Props = {
  match: TypeMatch,
};

const ProfilePage = ({ match }: Props) => {
  const { user } = useSelector((state: StateRoot) =>
    selectAuthentification(state)
  );
  const { country, language } = match.params;
  const [personality, setPersonality] = useState(null);
  const [loadPersonality, setLoadPersonality] = useState(true);

  const fetchPersonality = async () => {
    const personalityResponse: ?TypeUser = await getPersonalityById(
      user.userId
    );

    setPersonality(personalityResponse);
    setLoadPersonality(false);
  };

  useEffect(() => {
    fetchPersonality();
  }, [user]);

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
        <ProfilePageSidebarWrapperStyle>
          <ProfilePageSidebarStyle id="sidebar_content">
            <UserInformations user={user} navigationBar={NavigationBar} />
          </ProfilePageSidebarStyle>
        </ProfilePageSidebarWrapperStyle>
        <ProfilePageContentStyle>
          <ProfilePageContentStyle>
            <TabNavStyle
              aria-label={i18n.t('common.secondary_nav')}
              id="organisation_nav"
            >
              <TabListStyle as="div">
                <TabStyle as="div" isSelected>
                  <span>{i18n.t('personality.tabs.top_ideas')}</span>
                </TabStyle>
              </TabListStyle>
            </TabNavStyle>
            {loadPersonality ? (
              <Spinner />
            ) : (
              <Opinions personality={personality} privateProfile />
            )}
          </ProfilePageContentStyle>
        </ProfilePageContentStyle>
      </ProfilePageContentWrapperStyle>
    </ProfileWrapperStyle>
  );
};

// default export needed for loadable component
export default ProfilePage; // eslint-disable-line import/no-default-export

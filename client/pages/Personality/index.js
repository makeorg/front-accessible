// @flow
import React, { useEffect, useState } from 'react';
import { Redirect, type match as TypeMatch, useParams } from 'react-router';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { useMobile } from 'Client/hooks/useMedia';
import { TabNavStyle, TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import {
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarWrapperStyle,
  ProfilePageSidebarStyle,
  ProfileAvatarLayoutStyle,
  ProfileAvatarStyle,
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileAlignLeftContentStyle,
  ProfileWebsiteLinkStyle,
  ProfileContentStyle,
  ProfilePageContentStyle,
  ProfileLinkIconStyle,
} from 'Client/ui/Elements/ProfileElements';
import { Avatar } from 'Client/ui/Avatar';
import { UserDescription } from 'Client/features/profile/UserInformations/Description';
import { OrganisationProfileSkipLinks } from 'Client/app/SkipLinks/Organisation';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Sharing } from 'Client/features/sharing';
import { PersonalityService } from 'Shared/services/Personality';
import { TYPE_PERSONALITY } from 'Shared/constants/user';
import { trackDisplayPublicProfile } from 'Shared/services/Tracking';
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { Opinions } from 'Client/features/opinions';
import { getHomeLink } from 'Shared/helpers/url';

type Props = {
  match: TypeMatch,
};

const PersonalityPage = ({ match }: Props) => {
  const [personality, setPersonality] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isMobile = useMobile();
  const { userId } = match.params;
  const { country } = useParams();

  useEffect(() => {
    trackDisplayPublicProfile(TYPE_PERSONALITY);
  }, []);

  useEffect(() => {
    PersonalityService.getPersonalityById(userId).then(personalityResponse => {
      setPersonality(personalityResponse);
      setIsLoading(false);
    });
  }, [userId]);

  if (!personality && isLoading) {
    return (
      <MiddlePageWrapperStyle aria-busy>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
  }

  if (!personality) {
    return <Redirect to={getHomeLink(country)} />;
  }

  return (
    <>
      <OrganisationProfileSkipLinks />
      <MetaTags
        title={i18n.t('meta.organisation.positions.title', {
          organisation: `${personality.firstName} ${personality.lastName}`,
        })}
      />
      <ProfileHeaderStyle />
      <ProfilePageContentWrapperStyle>
        <ProfilePageSidebarWrapperStyle>
          <ProfilePageSidebarStyle>
            <ScreenReaderItemStyle as="h2">
              {i18n.t('personality.title', {
                name: `${personality.firstName} ${personality.lastName}`,
              })}
            </ScreenReaderItemStyle>
            <ProfileAvatarLayoutStyle>
              <ProfileAvatarStyle avatarSize={80}>
                <Avatar
                  avatarSize={isMobile ? 120 : 160}
                  avatarUrl={personality.profile.avatarUrl}
                />
              </ProfileAvatarStyle>
            </ProfileAvatarLayoutStyle>
            <ProfileContentWrapperStyle>
              <ProfileTitleStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.firstname')}
                </ScreenReaderItemStyle>
                {personality.firstName}
                &nbsp;
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.lastname')}
                </ScreenReaderItemStyle>
                {personality.lastName}
                &nbsp;
                <CertifiedIconStyle aria-hidden focusable="false" />
              </ProfileTitleStyle>
            </ProfileContentWrapperStyle>
            {personality.profile.politicalParty && (
              <ProfileContentStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.political_party')}
                </ScreenReaderItemStyle>
                {personality.profile.politicalParty}
              </ProfileContentStyle>
            )}
            {personality.profile.description && (
              <>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.biography')}
                </ScreenReaderItemStyle>
                <UserDescription
                  description={personality.profile.description}
                />
              </>
            )}
            {personality.profile.website && (
              <ProfileAlignLeftContentStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.website')}
                </ScreenReaderItemStyle>
                <ProfileLinkIconStyle aria-hidden focusable="false" />
                <ProfileWebsiteLinkStyle
                  as="a"
                  target="_blank"
                  rel="noopener"
                  href={personality.profile.website}
                >
                  {personality.profile.website}
                </ProfileWebsiteLinkStyle>
              </ProfileAlignLeftContentStyle>
            )}
          </ProfilePageSidebarStyle>
          <TileWithTitle title={i18n.t('profile.organisation.sharing_title')}>
            <Sharing />
          </TileWithTitle>
        </ProfilePageSidebarWrapperStyle>
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
          <Opinions personality={personality} />
        </ProfilePageContentStyle>
      </ProfilePageContentWrapperStyle>
    </>
  );
};

// default export needed for loadable component
export default PersonalityPage; // eslint-disable-line import/no-default-export

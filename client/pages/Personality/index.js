// @flow
import React, { useEffect, useState } from 'react';
import { Redirect, type match as TypeMatch } from 'react-router';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { type TypeUser } from 'Shared/types/user';
import { useMobile } from 'Client/hooks/useMedia';
import { TabNavStyle, TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
  ProfileAvatarLayoutStyle,
  ProfileAvatarStyle,
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileSeparatorStyle,
  ProfileAlignLeftContentStyle,
  ProfileWebsiteLinkStyle,
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
  ProfileContentStyle,
} from 'Client/ui/Elements/ProfileElements';
import { Avatar } from 'Client/ui/Avatar';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements/CheckedSymbol';
import { UserDescription } from 'Client/features/profile/UserInformations/Description';
import { OrganisationProfileSkipLinks } from 'Client/app/SkipLinks/Organisation';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { SvgLink, SvgThumbsUp } from 'Client/ui/Svg/elements';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Sharing } from 'Client/features/sharing';
import { getPersonalityById } from 'Shared/services/Personality';
import {
  ThumbsUpWrapperStyle,
  ThumbsUpStyle,
  PlaceholderParagraphStyle,
} from 'Client/ui/Elements/PlaceholdersElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { TYPE_PERSONALITY } from 'Shared/constants/user';
import { trackDisplayPublicProfile } from 'Shared/services/Tracking';
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';

type Props = {
  match: TypeMatch,
};

const PersonalityPage = (props: Props) => {
  const [personality, setOrganisation] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [avatarSize, setAvatarSize] = useState<number>(60);
  const isMobile = useMobile();
  const { match } = props;
  const { userId } = match.params;

  useEffect(() => {
    trackDisplayPublicProfile(TYPE_PERSONALITY);
  }, []);

  useEffect(() => {
    const fetchOrganisation = async () => {
      const personalityResponse: ?TypeUser = await getPersonalityById(userId);

      setOrganisation(personalityResponse);
      setIsLoading(false);
    };

    fetchOrganisation();

    if (!isMobile) {
      setAvatarSize(160);
    }
  }, [userId, isMobile]);

  if (!personality && isLoading) {
    return (
      <MiddlePageWrapperStyle aria-busy>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
  }

  if (!personality) {
    return <Redirect to="/" />;
  }

  return (
    <ProfileWrapperStyle>
      <OrganisationProfileSkipLinks />
      <MetaTags />
      <ProfileHeaderStyle aria-hidden />
      <ProfilePageContentWrapperStyle>
        <ProfilePageSidebarWrapperStyle>
          <ProfilePageSidebarStyle>
            <ProfileAvatarLayoutStyle>
              <ProfileAvatarStyle>
                <Avatar
                  avatarSize={avatarSize}
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
                <SvgCheckedSymbol style={CertifiedIconStyle} />
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
                <ProfileSeparatorStyle />
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
                <SvgLink aria-hidden style={{ marginRight: '5px' }} />
                <ProfileWebsiteLinkStyle
                  as="a"
                  target="_blank"
                  rel="noreferrer noopener"
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
          <ProfileContentHeaderStyle>
            <SecondLevelTitleStyle>
              {i18n.t('personality.top_ideas.title', {
                firstname: personality.firstName,
                lastname: personality.lastName,
              })}
            </SecondLevelTitleStyle>
            <ProfileTitleSeparatorStyle />
          </ProfileContentHeaderStyle>
          <CenterColumnStyle>
            <ThumbsUpWrapperStyle>
              <SvgThumbsUp aria-hidden style={ThumbsUpStyle} />
            </ThumbsUpWrapperStyle>
            <PlaceholderParagraphStyle>
              {i18n.t('personality.top_ideas.text', {
                firstname: personality.firstName,
                lastname: personality.lastName,
              })}
            </PlaceholderParagraphStyle>
          </CenterColumnStyle>
        </ProfilePageContentStyle>
      </ProfilePageContentWrapperStyle>
    </ProfileWrapperStyle>
  );
};

// default export needed for loadable component
export default PersonalityPage; // eslint-disable-line import/no-default-export

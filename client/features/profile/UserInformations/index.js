/* @flow */
import React, { type Element, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'Shared/store/actions/authentification';
import { type TypeUser } from 'Shared/types/user';
import { i18n } from 'Shared/i18n';
import { getAgeFromDateOfBirth } from 'Shared/helpers/date';
import { Avatar } from 'Client/ui/Avatar';
import { SvgMapMarker, SvgSignOut, SvgLink } from 'Client/ui/Svg/elements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements/CheckedSymbol';
import {
  ProfileAvatarStyle,
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileContentStyle,
  ProfileSeparatorStyle,
  ProfileAvatarLayoutStyle,
  ProfileInformationButtonStyle,
  ProfileNavigationStyle,
  ProfileAlignLeftContentStyle,
  ProfileWebsiteLinkStyle,
} from 'Client/ui/Elements/ProfileElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { useMobile } from 'Client/hooks/useMedia';
import {
  TYPE_ORGANISATION,
  TYPE_PERSONALITY,
  TYPE_USER,
} from 'Shared/constants/user';
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { UserDescription } from './Description';

type Props = {
  user: TypeUser,
  navigationBar: Element<any>,
};

export const UserInformations = ({ user, navigationBar }: Props) => {
  const { profile } = user;
  const dispatch = useDispatch();
  const [avatarSize, setAvatarSize] = useState<number>(60);
  const isMobile = useMobile();
  const isOrganisation = user.userType === TYPE_ORGANISATION;
  const isPersonality = user.userType === TYPE_PERSONALITY;
  const isBasicUser = user.userType === TYPE_USER;

  useEffect(() => {
    if (!isMobile) {
      setAvatarSize(160);
    }
  }, [isMobile]);

  return (
    <>
      <ProfileAvatarLayoutStyle>
        <ProfileAvatarStyle>
          <Avatar avatarSize={avatarSize} avatarUrl={profile.avatarUrl} />
        </ProfileAvatarStyle>
        {isOrganisation && (
          <ProfileContentWrapperStyle>
            <ProfileTitleStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.organisation')}
              </ScreenReaderItemStyle>
              {user.organisationName}
              <SvgCheckedSymbol style={CertifiedIconStyle} />
            </ProfileTitleStyle>
          </ProfileContentWrapperStyle>
        )}
        <ProfileContentWrapperStyle>
          <ScreenReaderItemStyle as="h2">
            {i18n.t('profile.common.infos')}
          </ScreenReaderItemStyle>
          {!isOrganisation && (
            <>
              <ProfileTitleStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.firstname')}
                </ScreenReaderItemStyle>
                {user.firstName}
                &nbsp;
                {isPersonality && (
                  <>
                    <ScreenReaderItemStyle>
                      {i18n.t('profile.common.labels.lastname')}
                    </ScreenReaderItemStyle>
                    {user.lastName}
                    <SvgCheckedSymbol style={CertifiedIconStyle} />
                  </>
                )}
              </ProfileTitleStyle>
              <ProfileContentStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.email')}
                </ScreenReaderItemStyle>
                {user.email}
              </ProfileContentStyle>
            </>
          )}
          {profile.politicalParty && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.political_party')}
              </ScreenReaderItemStyle>
              {profile.politicalParty}
            </ProfileContentStyle>
          )}
          {profile.postalCode && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.postal_code')}
              </ScreenReaderItemStyle>
              <SvgMapMarker aria-hidden style={{ marginRight: '3px' }} />
              {profile.postalCode}
            </ProfileContentStyle>
          )}
          {profile.dateOfBirth && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.age')}
              </ScreenReaderItemStyle>
              {i18n.t('profile.common.age', {
                age: getAgeFromDateOfBirth(profile.dateOfBirth),
              })}
            </ProfileContentStyle>
          )}
          {profile.profession && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.profession')}
              </ScreenReaderItemStyle>
              {profile.profession}
            </ProfileContentStyle>
          )}
        </ProfileContentWrapperStyle>
      </ProfileAvatarLayoutStyle>
      {profile.description && (
        <>
          <ProfileSeparatorStyle />
          <ScreenReaderItemStyle>
            {i18n.t('profile.common.labels.biography')}
          </ScreenReaderItemStyle>
          <UserDescription description={profile.description} />
        </>
      )}
      {!isBasicUser && profile.website && (
        <ProfileAlignLeftContentStyle>
          <ScreenReaderItemStyle>
            {i18n.t('profile.common.labels.website')}
          </ScreenReaderItemStyle>
          <SvgLink aria-hidden style={{ marginRight: '5px' }} />
          <ProfileWebsiteLinkStyle
            as="a"
            target="_blank"
            rel="noreferrer noopener"
            href={profile.website}
          >
            {profile.website}
          </ProfileWebsiteLinkStyle>
        </ProfileAlignLeftContentStyle>
      )}
      <ProfileNavigationStyle>
        {navigationBar}
        <ProfileInformationButtonStyle onClick={() => dispatch(logout())}>
          <IconWrapperStyle aria-hidden>
            <SvgSignOut />
          </IconWrapperStyle>
          {i18n.t('profile.common.log_out')}
        </ProfileInformationButtonStyle>
      </ProfileNavigationStyle>
    </>
  );
};

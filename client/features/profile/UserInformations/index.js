/* @flow */
import React, { type Element, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'Shared/store/actions/authentification';
import { type TypeUser } from 'Shared/types/user';
import { i18n } from 'Shared/i18n';
import { getAgeFromDateOfBrth } from 'Shared/helpers/date';
import { Avatar } from 'Client/ui/Avatar';
import { SvgMapMarker, SvgSignOut, SvgLink } from 'Client/ui/Svg/elements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements/CheckedSymbol';
import { TextColors } from 'Client/app/assets/vars/Colors';
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
        {user.isOrganisation && (
          <ProfileContentWrapperStyle>
            <ProfileTitleStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.organisation')}
              </ScreenReaderItemStyle>
              {user.organisationName}
              &nbsp;
              <SvgCheckedSymbol
                style={{ fontSize: '14px', fill: TextColors.Blue }}
              />
            </ProfileTitleStyle>
          </ProfileContentWrapperStyle>
        )}
        <ProfileContentWrapperStyle>
          <ScreenReaderItemStyle as="h2">
            {i18n.t('profile.common.infos')}
          </ScreenReaderItemStyle>
          {!user.isOrganisation && (
            <>
              <ProfileTitleStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.firstname')}
                </ScreenReaderItemStyle>
                {user.firstName}
              </ProfileTitleStyle>
              <ProfileContentStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.email')}
                </ScreenReaderItemStyle>
                {user.email}
              </ProfileContentStyle>
            </>
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
                age: getAgeFromDateOfBrth(profile.dateOfBirth),
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
      {user.isOrganisation && profile.website && (
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

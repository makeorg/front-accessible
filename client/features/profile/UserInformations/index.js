// @flow
import React, { type Element } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'Shared/store/actions/authentification';
import { type UserType } from 'Shared/types/user';
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
import {
  formatUserName,
  formatOrganisationName,
} from 'Shared/helpers/stringFormatter';
import { UserDescription } from './Description';

type Props = {
  user: UserType,
  navigationBar: Element<any>,
};

export const UserInformations = ({ user, navigationBar }: Props) => {
  const dispatch = useDispatch();
  const isMobile = useMobile();
  const isOrganisation = user.userType === TYPE_ORGANISATION;
  const isPersonality = user.userType === TYPE_PERSONALITY;
  const isBasicUser = user.userType === TYPE_USER;

  const { avatarUrl, displayName, email } = user;
  const {
    firstName,
    lastName,
    politicalParty,
    postalCode,
    dateOfBirth,
    profession,
    description,
    website,
  } = user.profile;

  return (
    <>
      <ProfileAvatarLayoutStyle>
        <ProfileAvatarStyle avatarSize={isMobile ? 120 : 160}>
          <Avatar avatarSize={isMobile ? 120 : 160} avatarUrl={avatarUrl} />
        </ProfileAvatarStyle>
        {isOrganisation && (
          <ProfileContentWrapperStyle>
            <ProfileTitleStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.organisation')}
              </ScreenReaderItemStyle>
              {formatOrganisationName(displayName)}
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
                {formatUserName(firstName)}
                &nbsp;
                {isPersonality && (
                  <>
                    <ScreenReaderItemStyle>
                      {i18n.t('profile.common.labels.lastname')}
                    </ScreenReaderItemStyle>
                    {formatUserName(lastName)}
                    <SvgCheckedSymbol style={CertifiedIconStyle} />
                  </>
                )}
              </ProfileTitleStyle>
              <ProfileContentStyle>
                <ScreenReaderItemStyle>
                  {i18n.t('profile.common.labels.email')}
                </ScreenReaderItemStyle>
                {email}
              </ProfileContentStyle>
            </>
          )}
          {politicalParty && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.political_party')}
              </ScreenReaderItemStyle>
              {politicalParty}
            </ProfileContentStyle>
          )}
          {postalCode && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.postal_code')}
              </ScreenReaderItemStyle>
              <SvgMapMarker aria-hidden style={{ marginRight: '3px' }} />
              {postalCode}
            </ProfileContentStyle>
          )}
          {dateOfBirth && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.age')}
              </ScreenReaderItemStyle>
              {i18n.t('profile.common.age', {
                age: getAgeFromDateOfBirth(dateOfBirth),
              })}
            </ProfileContentStyle>
          )}
          {profession && (
            <ProfileContentStyle>
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.profession')}
              </ScreenReaderItemStyle>
              {profession}
            </ProfileContentStyle>
          )}
        </ProfileContentWrapperStyle>
      </ProfileAvatarLayoutStyle>
      {description && (
        <>
          <ScreenReaderItemStyle>
            {i18n.t('profile.common.labels.biography')}
          </ScreenReaderItemStyle>
          <UserDescription description={description} />
        </>
      )}
      {!isBasicUser && website && (
        <ProfileAlignLeftContentStyle>
          <ScreenReaderItemStyle>
            {i18n.t('profile.common.labels.website')}
          </ScreenReaderItemStyle>
          <SvgLink aria-hidden style={{ marginRight: '5px' }} />
          <ProfileWebsiteLinkStyle
            as="a"
            target="_blank"
            rel="noreferrer noopener"
            href={website}
          >
            {website}
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

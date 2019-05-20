// @flow
import React from 'react';
import { type User as TypeUser } from 'Shared/types/user';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { getRouteProfile } from 'Shared/routes';
import { SvgUser } from 'Client/ui/Svg/elements';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Avatar } from 'Client/ui/Avatar';
import { HiddenOnMobileStyle } from 'Client/ui/Elements/HiddenElements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import {
  ProfileAccessWrapperStyle,
  ProfileAccessButtonLabelStyle,
  ProfileAccessLinkStyle,
} from '../Styled';

type AuthentificatedBarProps = {
  user: TypeUser,
};

type NotAuthentificatedBarProps = {
  handleRegisterModal: () => void,
  handleLoginModal: () => void,
};

export const AuthentificatedBar = ({ user }: AuthentificatedBarProps) => {
  const { avatarUrl } = user.profile;
  const countryLanguage = `${user.country}-${user.language}`;
  const profileLink = getRouteProfile(countryLanguage);
  return (
    <ProfileAccessWrapperStyle
      as="nav"
      aria-label={i18n.t('common.secondary_nav')}
    >
      <ProfileAccessLinkStyle
        aria-label={i18n.t('common.profile_nav')}
        as={Link}
        href={profileLink}
        rel="nofollow"
      >
        <Avatar>
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt={user.isOrganisation ? user.organisationName : user.firstName}
              aria-hidden
            />
          )}
        </Avatar>
        <span aria-hidden>
          {user.isOrganisation ? user.organisationName : user.firstName}
        </span>
      </ProfileAccessLinkStyle>
    </ProfileAccessWrapperStyle>
  );
};

export const NotAuthentificatedBar = ({
  handleLoginModal,
  handleRegisterModal,
}: NotAuthentificatedBarProps) => {
  return (
    <ProfileAccessWrapperStyle>
      <UnstyledButtonStyle onClick={handleLoginModal}>
        <SvgUser
          style={{
            fontSize: '16px',
            fill: TextColors.MediumGrey,
          }}
        />
        <ProfileAccessButtonLabelStyle as="span">
          {i18n.t('common.connexion_label')}
        </ProfileAccessButtonLabelStyle>
      </UnstyledButtonStyle>
      <HiddenOnMobileStyle as="span">/</HiddenOnMobileStyle>
      <UnstyledButtonStyle onClick={handleRegisterModal}>
        <ProfileAccessButtonLabelStyle as="span">
          {i18n.t('common.register_label')}
        </ProfileAccessButtonLabelStyle>
      </UnstyledButtonStyle>
    </ProfileAccessWrapperStyle>
  );
};

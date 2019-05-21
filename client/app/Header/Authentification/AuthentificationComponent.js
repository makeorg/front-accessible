// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { type User as TypeUser } from 'Shared/types/user';
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
      aria-label={i18n.t('common.profile_nav')}
    >
      <ProfileAccessLinkStyle as={Link} to={profileLink} rel="nofollow">
        <Avatar>{avatarUrl && <img src={avatarUrl} alt="" />}</Avatar>
        <span>
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
      <UnstyledButtonStyle
        onClick={handleLoginModal}
        aria-label={i18n.t('common.connexion_label')}
      >
        <SvgUser
          style={{
            fontSize: '16px',
            fill: TextColors.MediumGrey,
          }}
          aria-hidden
        />
        <ProfileAccessButtonLabelStyle as="span" aria-hidden>
          {i18n.t('common.connexion_label')}
        </ProfileAccessButtonLabelStyle>
      </UnstyledButtonStyle>
      <HiddenOnMobileStyle as="span">/</HiddenOnMobileStyle>
      <UnstyledButtonStyle
        onClick={handleRegisterModal}
        aria-label={i18n.t('common.register_label')}
      >
        <ProfileAccessButtonLabelStyle as="span" aria-hidden>
          {i18n.t('common.register_label')}
        </ProfileAccessButtonLabelStyle>
      </UnstyledButtonStyle>
    </ProfileAccessWrapperStyle>
  );
};

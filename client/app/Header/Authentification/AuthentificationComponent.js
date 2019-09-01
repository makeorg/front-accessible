// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { type TypeUser } from 'Shared/types/user';
import { i18n } from 'Shared/i18n';
import { getRouteProfile } from 'Shared/routes';
import { SvgUser } from 'Client/ui/Svg/elements';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Avatar } from 'Client/ui/Avatar';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { useMobile } from 'Client/hooks/useMedia';
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
  const profileLink = getRouteProfile(user.country, user.language);

  return (
    <ProfileAccessWrapperStyle
      as="nav"
      aria-label={i18n.t('common.header_authentification_nav')}
    >
      <ProfileAccessLinkStyle as={Link} to={profileLink} rel="nofollow">
        <Avatar avatarUrl={avatarUrl} />
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
  const isMobile = useMobile();
  return (
    <ProfileAccessWrapperStyle>
      <UnstyledButtonStyle
        onClick={handleLoginModal}
        aria-label={i18n.t('common.connexion_extended')}
      >
        <SvgUser
          style={{
            fontSize: '16px',
            fill: TextColors.MediumGrey,
          }}
          aria-hidden
        />
        {!isMobile && (
          <ProfileAccessButtonLabelStyle as="span" aria-hidden>
            {i18n.t('common.connexion_label')}
          </ProfileAccessButtonLabelStyle>
        )}
      </UnstyledButtonStyle>
      {!isMobile && (
        <React.Fragment>
          <span aria-hidden>/</span>
          <UnstyledButtonStyle
            onClick={handleRegisterModal}
            aria-label={i18n.t('common.register_label')}
          >
            <ProfileAccessButtonLabelStyle as="span" aria-hidden>
              {i18n.t('common.register_label')}
            </ProfileAccessButtonLabelStyle>
          </UnstyledButtonStyle>
        </React.Fragment>
      )}
    </ProfileAccessWrapperStyle>
  );
};

// @flow
import React from 'react';
import { type User as TypeUser } from 'Shared/types/user';
import { HiddenOnMobileStyle } from 'Client/ui/Elements/HiddenElements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { getRouteProfile } from 'Shared/routes';
import { SvgUser, SvgEmptyAvatar } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { TextColors } from 'Client/app/assets/vars/Colors';
import {
  ProfileAccessWrapperStyle,
  ProfileAccessButtonStyle,
  ProfileAccessLinkStyle,
  AvatarImgStyle,
} from '../Styled';

type Props = {
  user: TypeUser,
  handleRegisterModal: () => void,
  handleLoginModal: () => void,
};

export const AccessToProfileComponent = (props: Props) => {
  const { user, handleLoginModal, handleRegisterModal } = props;

  if (user) {
    const avatarSize = 30;
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
          href={profileLink}
          rel="nofollow"
        >
          {avatarUrl ? (
            <AvatarImgStyle
              aria-hidden
              avatarSize={avatarSize}
              src={avatarUrl}
              alt=""
            />
          ) : (
            <SvgEmptyAvatar
              aria-hidden
              width={avatarSize}
              height={avatarSize}
            />
          )}
          <span aria-hidden>{user.firstName}</span>
        </ProfileAccessLinkStyle>
      </ProfileAccessWrapperStyle>
    );
  }

  return (
    <ProfileAccessWrapperStyle>
      <UnstyledButtonStyle aria-hidden onClick={handleLoginModal}>
        <SvgUser style={{ fontSize: '16px', fill: TextColors.MediumGrey }} />
      </UnstyledButtonStyle>
      <HiddenOnMobileStyle>
        <ProfileAccessButtonStyle onClick={handleLoginModal}>
          {i18n.t('common.connexion_label')}
        </ProfileAccessButtonStyle>
        /
        <ProfileAccessButtonStyle onClick={handleRegisterModal}>
          {i18n.t('common.register_label')}
        </ProfileAccessButtonStyle>
      </HiddenOnMobileStyle>
    </ProfileAccessWrapperStyle>
  );
};

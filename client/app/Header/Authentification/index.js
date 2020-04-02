// @flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalShowRegister, modalShowLogin } from 'Shared/store/actions/modal';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { type StateRoot } from 'Shared/store/types';
import { i18n } from 'Shared/i18n';
import { getRouteProfile } from 'Shared/routes';
import { SvgUser, SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Avatar } from 'Client/ui/Avatar';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { useMobile } from 'Client/hooks/useMedia';
import { trackClickProfile } from 'Shared/services/Tracking';
import { TYPE_ORGANISATION, TYPE_PERSONALITY } from 'Shared/constants/user';
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import {
  formatUserName,
  formatOrganisationName,
} from 'Shared/helpers/stringFormatter';
import {
  ProfileAccessWrapperStyle,
  ProfileAccessButtonLabelStyle,
  ProfileAccessLinkStyle,
} from '../style';

export const HeaderAuthentification = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: StateRoot) =>
    selectAuthentification(state)
  );
  const isMobile = useMobile();

  if (user && user.userType !== 'undefined') {
    const isOrganisation = user.userType === TYPE_ORGANISATION;
    const isPersonality = user.userType === TYPE_PERSONALITY;

    return (
      <ProfileAccessWrapperStyle
        as="nav"
        aria-label={i18n.t('common.header_authentification_nav')}
      >
        <ProfileAccessLinkStyle
          to={getRouteProfile(user.country, user.language)}
          onClick={trackClickProfile}
        >
          <Avatar avatarUrl={user.profile.avatarUrl} />
          {isOrganisation
            ? formatOrganisationName(user.displayName)
            : formatUserName(user.displayName)}
          {isOrganisation && <SvgCheckedSymbol style={CertifiedIconStyle} />}
          {isPersonality && <SvgCheckedSymbol style={CertifiedIconStyle} />}
        </ProfileAccessLinkStyle>
      </ProfileAccessWrapperStyle>
    );
  }

  return (
    <ProfileAccessWrapperStyle>
      <UnstyledButtonStyle
        onClick={() => dispatch(modalShowLogin())}
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
            onClick={() => dispatch(modalShowRegister())}
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

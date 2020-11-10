// @flow
import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { useDesktop } from 'Client/hooks/useMedia';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import { trackClickProfile } from 'Shared/services/Tracking';
import { Avatar } from 'Client/ui/Avatar';
import { TYPE_ORGANISATION } from 'Shared/constants/user';
import {
  formatOrganisationName,
  formatUserName,
} from 'Shared/helpers/stringFormatter';
import { getRouteProfile } from 'Shared/routes';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { SvgUser } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { modalShowLogin } from 'Shared/store/actions/modal';
import { SEARCH_ELEMENT_ARIA_CLASS } from 'Shared/constants/a11y';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { ProfileLinkStyle } from './style';

export const HeaderAuthentication = () => {
  const isDesktop = useDesktop();
  const dispatch = useDispatch();
  const { user } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );
  const { country } = useSelector((state: StateRoot) => state.appConfig);

  if (user) {
    const isOrganisation = user.userType === TYPE_ORGANISATION;
    const userName = isOrganisation
      ? formatOrganisationName(user.displayName)
      : formatUserName(user.displayName);

    return (
      <ProfileLinkStyle
        className={SEARCH_ELEMENT_ARIA_CLASS}
        to={getRouteProfile(country)}
        onClick={trackClickProfile}
        aria-label={i18n.t('common.header_authentication_nav')}
      >
        <Avatar avatarUrl={user.avatarUrl} />
        {isDesktop && userName}
      </ProfileLinkStyle>
    );
  }

  return (
    <ProfileLinkStyle
      className={SEARCH_ELEMENT_ARIA_CLASS}
      as={UnstyledButtonStyle}
      onClick={() => dispatch(modalShowLogin())}
      data-cy-button="login"
      type="button"
    >
      {!isDesktop ? (
        <>
          <SvgUser focusable="false" aria-hidden />
          <ScreenReaderItemStyle>
            {i18n.t('common.connexion_label')}
          </ScreenReaderItemStyle>
        </>
      ) : (
        i18n.t('common.connexion_label')
      )}
    </ProfileLinkStyle>
  );
};

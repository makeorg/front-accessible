// @flow
import { WhiteLink } from 'Client/ui/Elements/Notifications/Banner/style';
import React from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { modalCloseCookies } from 'Shared/store/actions/modal';

export const SocialMediaCookiesMessage = () => {
  const dispatch = useDispatch();
  return (
    <>
      {i18n.t('common.notifications.cookies.social_media')}
      <WhiteLink to="#" onClick={() => dispatch(modalCloseCookies())}>
        {i18n.t('common.notifications.cookies.cookie_page')}
      </WhiteLink>
      .
    </>
  );
};

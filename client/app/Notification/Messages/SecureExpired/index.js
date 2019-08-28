// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgSadEmoji } from 'Client/ui/Svg/elements';
import { SecuredExpirationStyle } from '../../Styled';

export const SecureExpiredMessage = () => (
  <SecuredExpirationStyle>
    {i18n.t('common.notifications.secure_expired.first_sentence')}
    <SvgSadEmoji
      style={{ width: '26px', padding: '0 5px' }}
      aria-label={i18n.t('common.notifications.secure_expired.emoji')}
    />
    {i18n.t('common.notifications.secure_expired.second_sentence')}
  </SecuredExpirationStyle>
);

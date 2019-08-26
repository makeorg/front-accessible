// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgSadEmoji } from 'Client/ui/Svg/elements';

export const SecureExpiredMessage = () => (
  <span>
    {i18n.t('common.notifications.secure_expired.first_sentence')}
    <SvgSadEmoji
      style={{ widht: '16px', height: '16px', padding: '0 5px' }}
      aria-label={i18n.t('common.notifications.secure_expired.emoji')}
    />
    {i18n.t('common.notifications.secure_expired.second_sentence')}
  </span>
);

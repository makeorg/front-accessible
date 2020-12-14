// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

import {
  VoteOnlyMessageStyle,
  VoteOnlyButtonStyle,
} from 'Client/ui/Elements/Notifications/Banner/style';

export const VoteOnlyMessage = ({ close }) => (
  <VoteOnlyMessageStyle>
    {i18n.t('common.notifications.vote_only.message')}
    <VoteOnlyButtonStyle aria-expanded="false" onClick={close}>
      {i18n.t('common.notifications.vote_only.button')}
    </VoteOnlyButtonStyle>
  </VoteOnlyMessageStyle>
);

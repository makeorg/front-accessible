// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearNotificationBanner,
  dismissNotification,
} from 'Shared/store/actions/notifications';
import {
  VoteOnlyMessageStyle,
  VoteOnlyButtonStyle,
} from 'Client/ui/Elements/Notifications/Banner/style';

export const VoteOnlyMessage = () => {
  const { id } = useSelector((state: StateRoot) => state.notifications.banner);
  const dispatch = useDispatch();
  const closeNotificationBanner = () => {
    dispatch(dismissNotification(id));
    return dispatch(clearNotificationBanner());
  };

  return (
    <VoteOnlyMessageStyle>
      {i18n.t('common.notifications.vote_only.message')}
      <VoteOnlyButtonStyle
        aria-expanded="false"
        onClick={closeNotificationBanner}
      >
        {i18n.t('common.notifications.vote_only.button')}
      </VoteOnlyButtonStyle>
    </VoteOnlyMessageStyle>
  );
};

// @flow
import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { TipLinkStyle } from 'Client/ui/Elements/Notifications/Tip/style';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearNotificationTip,
  dismissNotification,
} from 'Shared/store/actions/notifications';

export const TagsTip = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state: StateRoot) => state.notifications.tip);

  const closeNotificationTip = () => {
    dispatch(dismissNotification(id));
    return dispatch(clearNotificationTip());
  };

  return (
    <>
      {i18n.t('common.notifications.tags_filter')}
      <ScreenReaderItemStyle>
        {i18n.t('consultation.tags.description')}
      </ScreenReaderItemStyle>
      <TipLinkStyle onClick={closeNotificationTip}>
        {i18n.t('common.notifications.thank_you')}
      </TipLinkStyle>
    </>
  );
};

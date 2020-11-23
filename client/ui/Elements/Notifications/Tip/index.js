// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgClose } from 'Client/ui/Svg/elements';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearNotificationTip,
  dismissNotification,
} from 'Shared/store/actions/notifications';
import { NotificationMessage } from 'Client/app/Notifications/Message';
import {
  TipWrapperStyle,
  TipCrossStyle,
  TriangleUpStyle,
  TriangleDownStyle,
} from './style';
import { NotificationIcon } from '../Icon';

type Props = {
  /** isFirstSequenceVote for specific design on sequence firstProposal */
  isFirstSequenceVote?: boolean,
};

export const Tip = ({ isFirstSequenceVote = false }: Props) => {
  const dispatch = useDispatch();
  const { contentId, level, toDismiss } = useSelector(
    (state: StateRoot) => state.notifications.tip
  );
  const { dismissed } = useSelector((state: StateRoot) => state.notifications);
  const isDismissed = dismissed.find(
    notificationId => notificationId === contentId
  );

  const closeNotificationTip = () => {
    if (toDismiss) {
      dispatch(dismissNotification(contentId));
      return dispatch(clearNotificationTip());
    }

    return dispatch(clearNotificationTip());
  };

  if (!contentId || isDismissed) return null;

  return (
    <>
      {!isFirstSequenceVote && <TriangleUpStyle />}
      <TipWrapperStyle isFirstSequenceVote={isFirstSequenceVote}>
        <TipCrossStyle
          aria-label={i18n.t('common.notifications.icons.close')}
          onClick={closeNotificationTip}
        >
          <SvgClose aria-hidden />
        </TipCrossStyle>
        <NotificationIcon level={level} context="tip" />
        <NotificationMessage name={contentId} />
      </TipWrapperStyle>
      {isFirstSequenceVote && <TriangleDownStyle />}
    </>
  );
};

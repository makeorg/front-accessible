// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgClose } from 'Client/ui/Svg/elements';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearNotificationTip,
  dismissNotification,
} from 'Shared/store/actions/notifications';
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
  const { id, level, content, toDismiss } = useSelector(
    (state: StateRoot) => state.notifications.tip
  );
  const { dismissed } = useSelector((state: StateRoot) => state.notifications);
  const isDismissed = dismissed.find(notificationId => notificationId === id);

  const closeNotificationTip = () => {
    if (toDismiss) {
      dispatch(dismissNotification(id));
      return dispatch(clearNotificationTip());
    }

    return dispatch(clearNotificationTip());
  };

  if (!content || isDismissed) return null;

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
        {content}
      </TipWrapperStyle>
      {isFirstSequenceVote && <TriangleDownStyle />}
    </>
  );
};

// @flow
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  NOTIFICATION_LEVEL_INFORMATION,
  VOTE_ONLY_MESSAGE,
} from 'Shared/constants/notifications';
import { displayNotificationBanner } from 'Shared/store/actions/notifications';

export const useSequenceVoteOnlyNotification = question => {
  const dispatch = useDispatch;
  if (question && !question.canPropose) {
    dispatch(
      displayNotificationBanner(
        VOTE_ONLY_MESSAGE,
        NOTIFICATION_LEVEL_INFORMATION,
        { questionId: question.questionId },
        true
      )
    );
  }
};

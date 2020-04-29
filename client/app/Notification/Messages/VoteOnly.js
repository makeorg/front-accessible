// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { useDispatch } from 'react-redux';
import { clearNotification } from 'Shared/store/actions/notification';
import { VoteOnlyMessageStyle, VoteOnlyButtonStyle } from '../style';

export const VoteOnlyMessage = () => {
  const dispatch = useDispatch();
  return (
    <VoteOnlyMessageStyle>
      {i18n.t('common.notifications.vote_only.message')}
      <VoteOnlyButtonStyle
        aria-expanded="false"
        onClick={() => dispatch(clearNotification())}
      >
        {i18n.t('common.notifications.vote_only.button')}
      </VoteOnlyButtonStyle>
    </VoteOnlyMessageStyle>
  );
};

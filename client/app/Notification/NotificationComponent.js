// @flow

import * as React from 'react';
import i18n from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import * as Notification from './Styled';

type Props = {
  /** React elements rendered as children */
  children: React.Node,
  onClose: () => void
}

export const NotificationComponent = (props: Props) => {
  const { children, onClose } = props;
  return (
    <Notification.Wrapper role="banner">
      <Notification.Content>
        {children}
      </Notification.Content>
      <Notification.CloseButton
        aria-label={i18n.t('pannel.close')}
        aria-expanded="false"
        onClick={onClose}
      >
        <FontAwesomeIcon aria-hidden icon={faTimes} />
      </Notification.CloseButton>
    </Notification.Wrapper>
  );
};

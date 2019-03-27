// @flow

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgClose } from 'Client/ui/Svg/elements';
import { CloseButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { NotificationWrapperStyle, NotificationContentStyle } from './Styled';

type Props = {
  /** React elements rendered as children */
  children: React.Node,
  onClose: () => void,
};

export const NotificationComponent = (props: Props) => {
  const { children, onClose } = props;
  return (
    <NotificationWrapperStyle role="banner">
      <NotificationContentStyle>{children}</NotificationContentStyle>
      <CloseButtonStyle
        aria-label={i18n.t('modal.close')}
        aria-expanded="false"
        onClick={onClose}
      >
        <SvgClose aria-hidden />
      </CloseButtonStyle>
    </NotificationWrapperStyle>
  );
};

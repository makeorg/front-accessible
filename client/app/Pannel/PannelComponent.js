/* @flow */

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PannelCloseButtonStyle, PannelContentStyle, PannelStyle } from './Styled';

type Props = {
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called to close Sliding Pannel */
  handleClose: Function,
  /** React elements rendered as children */
  children: React.Node
};

/**
 * Renders Sliding Pannel
 */
export const PannelComponent = (props: Props) => {
  const { isPannelOpen, handleClose, children } = props;
  return (
    <PannelStyle translate={isPannelOpen ? 100 : 0} aria-hidden={isPannelOpen ? 'false' : 'true'}>
      <PannelCloseButtonStyle
        aria-label={i18n.t('pannel.close')}
        aria-expanded="false"
        onClick={handleClose}
        tabIndex={isPannelOpen ? 0 : -1}
      >
        <FontAwesomeIcon aria-hidden icon={faTimes} />
      </PannelCloseButtonStyle>
      <PannelContentStyle>
        {children}
      </PannelContentStyle>
    </PannelStyle>
  );
};

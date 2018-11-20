/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Pannel from './Styled';

type Props = {
  isPannelOpen: boolean,
  handleClose: Function,
  children: React.Node
};

const PannelComponent = (props: Props) => {
  const { isPannelOpen, handleClose, children } = props;
  return (
    <Pannel translate={isPannelOpen ? 100 : 0} aria-hidden={isPannelOpen ? 'false' : 'true'}>
      <Pannel.CloseButton
        aria-label={i18next.t('pannel.close')}
        aria-expanded="false"
        onClick={handleClose}
        tabIndex={isPannelOpen ? 0 : -1}
      >
        <FontAwesomeIcon aria-hidden icon={faTimes} />
      </Pannel.CloseButton>
      <Pannel.Content>
        {children}
      </Pannel.Content>
    </Pannel>
  );
};

export default PannelComponent;

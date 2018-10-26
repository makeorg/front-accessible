import React, { Component } from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Pannel from './Styled';


class PannelComponent extends Component {
  render() {
    const { isPannelOpen, handleClose, children } = this.props;
    return (
      <Pannel translate={isPannelOpen ? 100 : 0} aria-hidden={isPannelOpen ? 'false' : 'true'}>
        <Pannel.CloseButton
          aria-label={i18next.t('pannel.close')}
          aria-expanded="false"
          onClick={handleClose}
          tabIndex={isPannelOpen ? 0 : -1}
        >
          <FontAwesomeIcon aria-hidden="true" icon={faTimes} />
        </Pannel.CloseButton>
        <Pannel.Content>
          {children}
        </Pannel.Content>
      </Pannel>
    );
  }
}

export default PannelComponent;

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Pannel from './Styled';


class PannelComponent extends Component {
  render() {
    const { isPannelOpen, handleClose, children } = this.props;
    return (
      <Pannel translate={isPannelOpen ? 100 : 0} aria-hidden={isPannelOpen ? 'false' : 'true'}>
        <Pannel.CloseButton
          aria-label="Fermer le panneau déroulant"
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

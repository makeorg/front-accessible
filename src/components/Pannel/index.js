import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Pannel from './Styled';


class PannelComponent extends Component {
  render() {
    const { isOpen, handleClose, children } = this.props;
    return (
      <Pannel translate={isOpen ? 100 : 0} aria-hidden={isOpen ? 'false' : 'true'}>
        <Pannel.CloseButton
          aria-label="Fermer le panneau déroulant"
          aria-expanded="false"
          onClick={handleClose}
          tabIndex={isOpen ? 0 : -1}
        >
          <FontAwesomeIcon aria-hidden icon={faTimes} />
        </Pannel.CloseButton>
        <Pannel.Content>
          {children}
        </Pannel.Content>
      </Pannel>
    );
  }
}

export default PannelComponent;

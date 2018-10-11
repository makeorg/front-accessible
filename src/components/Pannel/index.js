import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Pannel from './Styled';


class PannelComponent extends Component {
  render() {
    const { isPannelOpen, closePannel } = this.props;
    return (
      <Pannel translate={isPannelOpen ? 100 : 0}>
        <Pannel.CloseButton
          aria-label="Fermer le panneau déroulant"
          onClick={closePannel}
          tabIndex={isPannelOpen ? 0 : -1}
        >
          <FontAwesomeIcon aria-hidden icon={faTimes} />
        </Pannel.CloseButton>
      </Pannel>
    );
  }
}

export default PannelComponent;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  VoteButton
} from '../Styled/Form';

class VoteButtonComponent extends React.Component {
  render() {
    const {
      name,
      color,
      label,
      icon,
      rotate,
      handleVote
    } = this.props;
    return (
      <Button htmlFor={name} color={color} rotate={rotate} as={VoteButton} onClick={handleVote}>
        <FontAwesomeIcon arira-label={label} icon={icon} />
      </Button>
    );
  }
}

export default VoteButtonComponent;

/* @flow */

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Styled/Button';

type Props = {
  color: string,
  label: string,
  icon: string,
  rotate: string,
  tabIndex: number,
  buttonType: React.Node,
  handleVote: Function
}

const VoteButtonComponent = (props: Props) => {
  const {
    color,
    label,
    icon,
    rotate,
    handleVote,
    buttonType,
    tabIndex
  } = props;

  return (
    <Button aria-label={label} tabIndex={tabIndex} color={color} rotate={rotate} as={buttonType} onClick={handleVote}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

export default VoteButtonComponent;

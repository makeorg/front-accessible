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
  id: string,
  buttonType: React.Node,
  handleVote: Function
}

const VoteButtonComponent = (props: Props) => {
  const {
    color,
    label,
    icon,
    rotate,
    tabIndex,
    id,
    buttonType,
    handleVote
  } = props;

  return (
    <Button
      aria-label={label}
      id={id}
      tabIndex={tabIndex}
      color={color}
      rotate={rotate}
      as={buttonType}
      onClick={handleVote}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

export default VoteButtonComponent;

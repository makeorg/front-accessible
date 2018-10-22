import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { BackArrow, BackButton } from '../Styled/Button';

const CollapseToggle = ({ isSequenceCollapsed, handleExpandSequence }) => {
  if (isSequenceCollapsed) {
    return (
      <div>
        <BackArrow aria-hidden="true" onClick={handleExpandSequence}>
          <FontAwesomeIcon icon={faArrowUp} />
        </BackArrow>
        <BackButton aria-hidden="true" onClick={handleExpandSequence}>
          Revenir aux propositions
        </BackButton>
      </div>
    );
  }
  return (
    null
  );
};

export default CollapseToggle;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { RedButton, GreyButton, IconInButton } from '../Elements/ButtonElements';

const ProposalSubmitButtonComponent = ({ canSubmit, handleSubmit }) => {
  if (canSubmit) {
    return (
      <RedButton type="submit" onClick={handleSubmit}>
        <IconInButton>
          <FontAwesomeIcon icon={faPencilAlt} />
        </IconInButton>
        Proposer
      </RedButton>
    );
  }

  return (
    <GreyButton type="submit" disabled>
      <IconInButton>
        <FontAwesomeIcon icon={faPencilAlt} />
      </IconInButton>
      Proposer
    </GreyButton>
  );
};

export default ProposalSubmitButtonComponent;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { SmallRedButton, SmallGreyButton, IconInButton } from '../../Elements/ButtonElements';

const ProposalSubmitButtonComponent = ({ canSubmit, handleSubmit }) => {
  if (canSubmit) {
    return (
      <SmallRedButton type="submit" onClick={handleSubmit}>
        <IconInButton>
          <FontAwesomeIcon aria-hidden="true" icon={faPencilAlt} />
        </IconInButton>
        Proposer
      </SmallRedButton>
    );
  }

  return (
    <SmallGreyButton type="submit" disabled>
      <IconInButton>
        <FontAwesomeIcon aria-hidden="true" icon={faPencilAlt} />
      </IconInButton>
      Proposer
    </SmallGreyButton>
  );
};

export default ProposalSubmitButtonComponent;

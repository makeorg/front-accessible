import React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { SmallRedButton, SmallGreyButton, IconInButton } from '../../Elements/ButtonElements';

const ProposalSubmitButtonComponent = ({ canSubmit, handleSubmit, isPannelOpen }) => {
  if (canSubmit) {
    return (
      <SmallRedButton
        type="submit"
        onClick={handleSubmit}
        tabIndex={isPannelOpen ? -1 : 0}
      >
        <IconInButton>
          <FontAwesomeIcon aria-hidden="true" icon={faPencilAlt} />
        </IconInButton>
        {i18next.t('common.propose')}
      </SmallRedButton>
    );
  }

  return (
    <SmallGreyButton type="submit" disabled>
      <IconInButton>
        <FontAwesomeIcon aria-hidden="true" icon={faPencilAlt} />
      </IconInButton>
      {i18next.t('common.propose')}
    </SmallGreyButton>
  );
};

export default ProposalSubmitButtonComponent;

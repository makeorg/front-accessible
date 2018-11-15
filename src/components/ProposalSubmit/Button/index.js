import React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { IconInButton } from '../../Elements/ButtonElements';
import { ProposalButton, DisabledProposalButton } from '../Styled/ProposalField';

const ProposalSubmitButtonComponent = ({ canSubmit, handleSubmit, isPannelOpen }) => {
  if (canSubmit) {
    return (
      <ProposalButton
        type="submit"
        onClick={handleSubmit}
        tabIndex={isPannelOpen ? -1 : 0}
      >
        <IconInButton>
          <FontAwesomeIcon aria-hidden icon={faPencilAlt} />
        </IconInButton>
        {i18next.t('common.propose')}
      </ProposalButton>
    );
  }

  return (
    <DisabledProposalButton type="submit" disabled>
      <IconInButton>
        <FontAwesomeIcon aria-hidden icon={faPencilAlt} />
      </IconInButton>
      {i18next.t('common.propose')}
    </DisabledProposalButton>
  );
};

export default ProposalSubmitButtonComponent;
